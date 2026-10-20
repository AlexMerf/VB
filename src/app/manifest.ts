import type { MetadataRoute } from 'next'

import { siteInfo } from '@/data/site'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${siteInfo.name} — сайты под ключ`,
		short_name: 'VB',
		description:
			'Разработка сайтов под ключ: анализ, прототип, дизайн, вёрстка и SEO.',
		start_url: '/',
		display: 'standalone',
		background_color: '#fdfdfd',
		theme_color: '#3669f9',
		lang: 'ru',
		icons: [
			{
				src: '/icon.svg',
				sizes: 'any',
				type: 'image/svg+xml',
				purpose: 'any'
			}
		]
	}
}
