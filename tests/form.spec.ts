import { expect, test } from '@playwright/test'

test.describe('бриф', () => {
	test('все поля доступны по подписям и обязательные помечены', async ({ page }) => {
		await page.goto('/brif')

		await expect(page.getByLabel('Как к вам обращаться')).toBeVisible()
		await expect(page.getByLabel('Напишите номер телефона')).toBeVisible()
		await expect(page.getByLabel('Напишите ник в Telegram')).toBeVisible()
		await expect(page.getByLabel('Наша компания занимается...')).toBeVisible()

		await expect(page.getByLabel('Как к вам обращаться')).toHaveAttribute('required', '')
		await expect(page.getByLabel('Напишите номер телефона')).toHaveAttribute('required', '')
	})

	test('телефон использует маску, совместимую с браузером', async ({ page }) => {
		await page.goto('/brif')

		const pattern = await page
			.getByLabel('Напишите номер телефона')
			.getAttribute('pattern')

		expect(pattern).toBeTruthy()
		// Браузер компилирует pattern с флагом v: незаэкранированные () и - ломают его.
		expect(pattern).toContain('\\(')
		expect(pattern).toContain('\\-')
	})

	test('радио-группа переключается', async ({ page }) => {
		await page.goto('/brif')

		const multi = page.getByRole('radio', { name: 'Многостраничный' })
		await page.getByText('Многостраничный', { exact: true }).first().click()

		await expect(multi).toBeChecked()
	})

	test('пустая форма не отправляется', async ({ page }) => {
		await page.goto('/brif')

		await page.getByRole('button', { name: 'Отправить' }).click()

		await expect(page.locator('form [role="alert"]')).toHaveCount(0)
		await expect(page).toHaveURL(/\/brif$/)
	})
})

test.describe('мобильное меню', () => {
	test.skip(({ viewport }) => (viewport?.width ?? 0) > 768, 'только мобильный проект')

	test('открывается, содержит навигацию и закрывается по Escape', async ({ page }) => {
		await page.goto('/')

		await page.getByRole('button', { name: 'Меню' }).click()
		const dialog = page.getByRole('dialog', { name: 'Меню' })
		await expect(dialog).toBeVisible()
		await expect(dialog.getByRole('link', { name: 'кейсы' })).toBeVisible()

		await page.keyboard.press('Escape')
		await expect(dialog).toBeHidden()
	})
})
