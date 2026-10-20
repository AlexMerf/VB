'use server'

import { headers } from 'next/headers'
import { z } from 'zod'

export type BriefState = {
	status: 'idle' | 'success' | 'error'
	message?: string
	fieldErrors?: Record<string, string>
}

const optional = (max: number) =>
	z
		.string()
		.trim()
		.max(max)
		.optional()
		.or(z.literal(''))

const briefSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Не меньше 2 символов')
		.max(80, 'Слишком длинное имя'),
	phone: z
		.string()
		.trim()
		.regex(/^[\d+][\d()\s-]{4,14}\d$/, 'Введите валидный телефон'),
	nickname: optional(100),
	site: optional(100),
	msgCompany: optional(2000),
	link: optional(300),
	purpose: optional(500),
	pages: optional(500),
	price: optional(100),
	msg: optional(3000)
})

const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const submissions = new Map<string, number[]>()

const isRateLimited = (key: string) => {
	const now = Date.now()
	const recent = (submissions.get(key) ?? []).filter(time => now - time < RATE_WINDOW_MS)
	recent.push(now)
	submissions.set(key, recent)

	if (submissions.size > 500) {
		for (const [storedKey, times] of submissions) {
			if (times.every(time => now - time > RATE_WINDOW_MS)) submissions.delete(storedKey)
		}
	}

	return recent.length > RATE_LIMIT
}

const escapeHtml = (value: string) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const buildMessage = (data: z.infer<typeof briefSchema>) => {
	const lines = [
		'<b>Заявка с сайта</b>',
		`<b>Имя:</b> ${escapeHtml(data.name)}`,
		`<b>Телефон:</b> ${escapeHtml(data.phone)}`
	]

	const optionalFields: Array<[string, string | undefined]> = [
		['Телеграм', data.nickname],
		['Какой сайт нужен', data.site],
		['Кратко о бизнесе', data.msgCompany],
		['Ссылка на сайт', data.link],
		['Цель сайта', data.purpose],
		['Какие страницы нужны', data.pages],
		['Бюджет', data.price],
		['Сообщения', data.msg]
	]

	for (const [label, value] of optionalFields) {
		if (value) lines.push(`<b>${label}:</b> ${escapeHtml(value)}`)
	}

	return lines.join('\n')
}

export async function sendBrief(
	_previousState: BriefState,
	formData: FormData
): Promise<BriefState> {
	// Honeypot: настоящие посетители это поле не видят и не заполняют.
	const honeypot = formData.get('company_website')
	if (typeof honeypot === 'string' && honeypot.trim() !== '') {
		return { status: 'success' }
	}

	const headerList = await headers()
	const ip = headerList.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

	if (isRateLimited(ip)) {
		return {
			status: 'error',
			message: 'Слишком много заявок подряд. Попробуйте через 10 минут или напишите в Telegram.'
		}
	}

	const raw: Record<string, string> = {}
	for (const [key, value] of formData.entries()) {
		if (typeof value === 'string') raw[key] = value
	}

	const parsed = briefSchema.safeParse(raw)

	if (!parsed.success) {
		const fieldErrors: Record<string, string> = {}
		for (const issue of parsed.error.issues) {
			const key = String(issue.path[0] ?? '')
			if (key && !fieldErrors[key]) fieldErrors[key] = issue.message
		}

		return {
			status: 'error',
			message: 'Проверьте выделенные поля и отправьте ещё раз.',
			fieldErrors
		}
	}

	const token = process.env.TELEGRAM_BOT_TOKEN
	const chatId = process.env.TELEGRAM_CHAT_ID

	if (!token || !chatId) {
		console.error('sendBrief: TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы')
		return {
			status: 'error',
			message: 'Форма временно недоступна. Напишите, пожалуйста, в Telegram или на почту.'
		}
	}

	try {
		const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				parse_mode: 'HTML',
				disable_web_page_preview: true,
				text: buildMessage(parsed.data)
			}),
			cache: 'no-store',
			signal: AbortSignal.timeout(10_000)
		})

		if (!response.ok) {
			const details = await response.text().catch(() => '')
			console.error('sendBrief: Telegram error', response.status, details.slice(0, 300))
			return {
				status: 'error',
				message: 'Не удалось отправить заявку. Напишите, пожалуйста, в Telegram или на почту.'
			}
		}
	} catch (error) {
		console.error('sendBrief: request failed', error)
		return {
			status: 'error',
			message: 'Не удалось отправить заявку. Напишите, пожалуйста, в Telegram или на почту.'
		}
	}

	return { status: 'success' }
}
