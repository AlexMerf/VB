import { expect, test } from '@playwright/test'

const routes = [
	{ path: '/', heading: /Помогаю бизнесам создавать/ },
	{ path: '/brif', heading: /Бриф на разработку сайта/ },
	{ path: '/privacy', heading: /Политика конфиденциальности/ },
	{ path: '/project-1', heading: /Многостраничный сайт для продажи/ },
	{ path: '/project-2', heading: /Многостраничный сайт для продажи/ }
]

test.describe('маршруты', () => {
	for (const route of routes) {
		test(`${route.path} отвечает 200 и рендерит заголовок`, async ({ page }) => {
			const response = await page.goto(route.path)

			expect(response?.status()).toBe(200)
			await expect(page.getByRole('heading', { level: 1 }).first()).toContainText(
				route.heading
			)
		})
	}

	test('страница этапов рендерит список этапов', async ({ page }) => {
		const response = await page.goto('/stages-page')

		expect(response?.status()).toBe(200)
		await expect(page.getByText('брифинг').first()).toBeVisible()
		await expect(page.getByText('настройка и тестирование').first()).toBeVisible()
	})

	test('неизвестный маршрут отдаёт кастомную 404', async ({ page }) => {
		const response = await page.goto('/definitely-missing-page')

		expect(response?.status()).toBe(404)
		await expect(page.getByText('Такой страницы нет')).toBeVisible()
	})
})

test('на главной есть портфолио и контакты', async ({ page }) => {
	await page.goto('/')

	await expect(page.getByRole('heading', { name: 'Каждый проект уникален' })).toBeVisible()
	await expect(page.getByRole('link', { name: 'заполнить бриф' })).toBeVisible()
	await expect(page.locator('#contacts')).toBeVisible()
})

test('навигация ведёт на страницы этапов и брифа', async ({ page, viewport }) => {
	test.skip((viewport?.width ?? 0) < 1000, 'десктопная навигация скрыта на мобильных')

	await page.goto('/')

	await page.getByRole('link', { name: 'этапы' }).first().click()
	await expect(page).toHaveURL(/\/stages-page$/)

	await page.goto('/')
	await page.getByRole('link', { name: 'бриф' }).first().click()
	await expect(page).toHaveURL(/\/brif$/)
})
