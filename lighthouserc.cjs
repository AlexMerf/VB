module.exports = {
	ci: {
		collect: {
			startServerCommand: 'npm run start -- --port 3000',
			startServerReadyPattern: 'Ready in',
			url: ['http://127.0.0.1:3000/', 'http://127.0.0.1:3000/brif'],
			numberOfRuns: 1,
			settings: {
				chromeFlags: '--no-sandbox --headless=new'
			}
		},
		assert: {
			assertions: {
				'categories:performance': ['warn', { minScore: 0.75 }],
				'categories:accessibility': ['error', { minScore: 0.95 }],
				'categories:best-practices': ['warn', { minScore: 0.95 }],
				'categories:seo': ['error', { minScore: 0.95 }],
				'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
				'largest-contentful-paint': ['warn', { maxNumericValue: 5000 }],
				'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }]
			}
		},
		upload: {
			target: 'filesystem',
			outputDir: '.lighthouseci'
		}
	}
}
