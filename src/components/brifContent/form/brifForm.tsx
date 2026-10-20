'use client'

import Link from 'next/link'
import { useActionState, useEffect, useRef } from 'react'

import { type BriefState, sendBrief } from '@/app/actions/send-brief'
import { Field } from '@/ui/field/Field'
import { RadioGroup } from '@/ui/radio/RadioGroup'

import styles from './styles.module.scss'

const initialState: BriefState = { status: 'idle' }

const siteOptions = [
	{ value: 'Одностраничный', label: 'Одностраничный' },
	{ value: 'Многостраничный', label: 'Многостраничный' },
	{ value: 'Дизайн макета без верстки', label: 'Дизайн макета без верстки' }
]

export const BrifForm = () => {
	const [state, formAction, isPending] = useActionState(sendBrief, initialState)
	const formRef = useRef<HTMLFormElement>(null)

	useEffect(() => {
		if (state.status === 'success') formRef.current?.reset()
	}, [state.status])

	const fieldErrors = state.fieldErrors ?? {}

	return (
		<form ref={formRef} className={styles.form} action={formAction}>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Ваше имя*</span>
				<Field
					label="Как к вам обращаться"
					name="name"
					required
					minLength={2}
					maxLength={80}
					autoComplete="name"
					error={fieldErrors.name}
				/>
			</div>

			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Ваши контакты*</span>
				<Field
					label="Напишите номер телефона"
					name="phone"
					type="tel"
					inputMode="tel"
					required
					pattern="[0-9+][0-9\(\)\s\-]{4,14}[0-9]"
					title="Например: 8 914 364 05 59"
					autoComplete="tel"
					helperText="Например 8-000-000-00-00"
					error={fieldErrors.phone}
				/>
				<Field
					label="Напишите ник в Telegram"
					name="nickname"
					autoComplete="off"
					helperText="Например @НикТелеграмм"
					error={fieldErrors.nickname}
				/>
			</div>

			<div className={styles.formGroup}>
				<RadioGroup
					name="site"
					legend="Какой сайт вам нужен?"
					options={siteOptions}
				/>
			</div>

			<div className={styles.formGroup}>
				<span className={styles.formLabel}>
					Расскажите кратко о вашем бизнесе, для которого нужен сайт
				</span>
				<Field
					label="Наша компания занимается..."
					name="msgCompany"
					multiline
					rows={5}
					maxLength={2000}
					error={fieldErrors.msgCompany}
				/>
			</div>

			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Ссылка на старый сайт</span>
				<Field
					label="При наличии"
					name="link"
					type="url"
					inputMode="url"
					maxLength={300}
					error={fieldErrors.link}
				/>
			</div>

			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Какая цель сайта?</span>
				<Field
					label="Например, «Автоматизировать все процессы»"
					name="purpose"
					maxLength={500}
					error={fieldErrors.purpose}
				/>
			</div>

			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Какие страницы нужны на сайте?</span>
				<Field
					label="Например, О компании, Наши работы, Отзывы"
					name="pages"
					maxLength={500}
					error={fieldErrors.pages}
				/>
			</div>

			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Комфортный бюджет</span>
				<Field label="" name="price" maxLength={100} error={fieldErrors.price} />
			</div>

			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Комментарии по проекту</span>
				<Field
					label="Любая дополнительная важная информация: вопросы, пожелания по дизайну, сроки и т.д."
					name="msg"
					multiline
					rows={5}
					maxLength={3000}
					error={fieldErrors.msg}
				/>
			</div>

			<div className={styles.honeypot} aria-hidden="true">
				<label>
					Не заполняйте это поле
					<input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
				</label>
			</div>

			{state.status === 'success' && (
				<div className={styles.success} role="status">
					Спасибо! Заявка отправлена — я свяжусь с вами.
				</div>
			)}

			{state.status === 'error' && (
				<div className={styles.alert} role="alert">
					{state.message}
				</div>
			)}

			<button type="submit" className={styles.btn} disabled={isPending}>
				{isPending ? 'Отправляем…' : 'Отправить'}
			</button>

			<div className={styles.politic}>
				<span>
					Нажимая на кнопку «Отправить», вы даете согласие на обработку
					персональных данных согласно
				</span>
				<Link href="/privacy">политики конфиденциальности</Link>
			</div>
		</form>
	)
}
