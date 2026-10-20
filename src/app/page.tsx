import type { Metadata } from 'next'

import { About } from '@/components/about/about'
import { Cooperation } from '@/components/cooperation/cooperation'
import { Heroimage } from '@/components/heroimage/Heroimage'
import { InfoSteeps } from '@/components/infoSteeps/infoSteeps'
import { PageTransition } from '@/components/layout/PageTransition'
import { Portfolio } from '@/components/portfolio/portfolio'
import { Stages } from '@/components/stages/stages'

import stagers from '@/data/stagers.json'

export const metadata: Metadata = {
	title: 'Сайты под ключ: дизайн, вёрстка, SEO',
	description:
		'Помогаю бизнесам создавать запоминающиеся сайты, которые выделяют на рынке. Анализ, прототип, дизайн, адаптив, вёрстка и SEO.',
	alternates: { canonical: '/' }
}

export default function HomePage() {
	const stagersPreview = stagers.slice(0, 2)

	return (
		<PageTransition>
			<Heroimage />
			<About />
			<InfoSteeps />
			<Portfolio />
			<Stages stagers={stagersPreview} />
			<Cooperation />
		</PageTransition>
	)
}
