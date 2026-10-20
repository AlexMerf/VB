import type { Metadata } from 'next'

import { About } from '@/components/about/about'
import { Cooperation } from '@/components/cooperation/cooperation'
import { Heroimage } from '@/components/heroimage/Heroimage'
import { InfoSteeps } from '@/components/infoSteeps/infoSteeps'
import { PageTransition } from '@/components/layout/PageTransition'
import { Portfolio } from '@/components/portfolio/portfolio'
import { Stages } from '@/components/stages/stages'

import { siteInfo } from '@/data/site'
import { stages } from '@/data/stages'

export const metadata: Metadata = {
	title: `${siteInfo.name} — сайты под ключ`,
	description:
		'Помогаю бизнесам создавать запоминающиеся сайты, которые выделяют на рынке. Анализ, прототип, дизайн, адаптив, вёрстка и SEO.',
	alternates: { canonical: '/' },
	openGraph: { url: '/' }
}

export default function HomePage() {
	const stagesPreview = stages.slice(0, 2)

	return (
		<PageTransition>
			<Heroimage />
			<About />
			<InfoSteeps />
			<Portfolio />
			<Stages stagers={stagesPreview} />
			<Cooperation />
		</PageTransition>
	)
}
