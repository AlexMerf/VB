import type { Metadata, Viewport } from 'next'
import { Mulish, Unbounded } from 'next/font/google'

import { Shell } from '@/components/layout/Shell'

import { siteInfo, siteUrl } from '@/data/site'
import { validateContent } from '@/data/validate'

import '@/styles/globals.scss'
import '@/styles/reset.scss'

const mulish = Mulish({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600'],
	variable: '--font-mulish',
	display: 'swap'
})

const unbounded = Unbounded({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-unbounded',
	display: 'swap'
})

validateContent()

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: `${siteInfo.name} — сайты под ключ`,
		template: '%s — VB'
	},
	description:
		'Разрабатываю сайты под ключ: анализ, прототип, дизайн, вёрстка и SEO. Портфолио и бриф на разработку сайта.',
	applicationName: 'VB',
	authors: [{ name: siteInfo.name }],
	creator: siteInfo.name,
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		siteName: 'VB',
		url: '/'
	},
	twitter: {
		card: 'summary_large_image'
	},
	robots: { index: true, follow: true }
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#3669f9'
}

const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: siteInfo.name,
	url: siteUrl,
	image: `${siteUrl}/image/valeria.webp`,
	jobTitle: 'Веб-дизайнер',
	email: `mailto:${siteInfo.email}`,
	telephone: siteInfo.phone_visible,
	sameAs: [siteInfo.behance, siteInfo.instagram]
}

const websiteJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'VB',
	url: siteUrl,
	inLanguage: 'ru'
}

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ru" className={`${mulish.variable} ${unbounded.variable}`}>
			<body>
				<Shell>{children}</Shell>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([personJsonLd, websiteJsonLd])
					}}
				/>
			</body>
		</html>
	)
}
