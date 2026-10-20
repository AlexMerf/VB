import { expect, test } from '@playwright/test'

test.describe('SEO и метаданные', () => {
	test('главная содержит title, description и canonical', async ({ page }) => {
		await page.goto('/')

		await expect(page).toHaveTitle(/сайты под ключ/i)

		const description = page.locator('meta[name="description"]')
		await expect(description).toHaveAttribute('content', /сайты|дизайн/i)

		await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
			'href',
			/https:\/\/.+\/?$/
		)
	})

	test('есть OG-картинка и twitter-карточка', async ({ page }) => {
		await page.goto('/')

		await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
			'content',
			/opengraph-image/
		)
		await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
			'content',
			'summary_large_image'
		)
	})

	test('JSON-LD описывает Person и WebSite', async ({ page }) => {
		await page.goto('/')

		const jsonLd = await page
			.locator('script[type="application/ld+json"]')
			.first()
			.textContent()
		const parsed = JSON.parse(jsonLd ?? '[]')
		const types = (Array.isArray(parsed) ? parsed : [parsed]).map(item => item['@type'])

		expect(types).toContain('Person')
		expect(types).toContain('WebSite')
	})

	test('sitemap и robots доступны', async ({ request }) => {
		const sitemap = await request.get('/sitemap.xml')
		expect(sitemap.status()).toBe(200)
		const sitemapBody = await sitemap.text()
		expect(sitemapBody).toContain('/project-1')
		expect(sitemapBody).toContain('/brif')

		const robots = await request.get('/robots.txt')
		expect(robots.status()).toBe(200)
		expect(await robots.text()).toContain('Sitemap:')
	})

	test('manifest и иконка на месте', async ({ request }) => {
		expect((await request.get('/manifest.webmanifest')).status()).toBe(200)
		expect((await request.get('/icon.svg')).status()).toBe(200)
	})
})
