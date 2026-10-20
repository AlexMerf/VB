import { defineConfig, devices } from '@playwright/test'

const PORT = Number(process.env.PORT || 3000)
const baseURL = `http://127.0.0.1:${PORT}`

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	retries: process.env.CI ? 1 : 0,
	reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
	use: {
		baseURL,
		trace: 'on-first-retry',
		locale: 'ru-RU'
	},
	projects: [
		{
			name: 'desktop',
			use: { ...devices['Desktop Chrome'], channel: 'chrome' }
		},
		{
			name: 'mobile',
			use: { ...devices['Pixel 7'], channel: 'chrome' }
		}
	],
	webServer: {
		command: `npm run build && npm run start -- --port ${PORT}`,
		url: baseURL,
		reuseExistingServer: !process.env.CI,
		timeout: 240_000
	}
})
