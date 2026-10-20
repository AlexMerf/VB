import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const pages = ['/', '/brif', '/stages-page', '/project-1', '/project-2', '/privacy']

for (const path of pages) {
	test(`нет нарушений доступности: ${path}`, async ({ page }) => {
		await page.goto(path)

		const results = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
			.analyze()

		expect(results.violations).toEqual([])
	})
}

test.describe('мобильное меню', () => {
	test.skip(({ viewport }) => (viewport?.width ?? 0) > 768, 'только мобильный проект')

	test('меню открыто — нарушений нет', async ({ page }) => {
		await page.goto('/')
		await page.getByRole('button', { name: 'Меню' }).click()

		const results = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
			.analyze()

		expect(results.violations).toEqual([])
	})
})
