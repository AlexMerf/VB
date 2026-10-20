import type { Metadata } from 'next'
import { Mulish, Unbounded } from 'next/font/google'

import { Shell } from '@/components/layout/Shell'

import '@/styles/globals.scss'
import '@/styles/reset.scss'

const mulish = Mulish({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-mulish',
	display: 'swap'
})

const unbounded = Unbounded({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-unbounded',
	display: 'swap'
})

export const metadata: Metadata = {
	metadataBase: new URL('https://vb-olive.vercel.app'),
	title: {
		default: 'Валерия Белобородова — сайты под ключ',
		template: '%s — VB'
	},
	description:
		'Разрабатываю сайты под ключ: анализ, прототип, дизайн, вёрстка и SEO. Портфолио и бриф на разработку сайта.',
	applicationName: 'VB',
	authors: [{ name: 'Валерия Белобородова' }],
	creator: 'Валерия Белобородова',
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		siteName: 'VB',
		url: '/'
	},
	robots: { index: true, follow: true }
}

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ru" className={`${mulish.variable} ${unbounded.variable}`}>
			<body>
				<Shell>{children}</Shell>
			</body>
		</html>
	)
}
