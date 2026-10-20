import type { Metadata } from 'next'

import { PageTransition } from '@/components/layout/PageTransition'
import { Stages } from '@/components/stages/stages'

import { stages } from '@/data/stages'

import styles from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Этапы работы',
	description:
		'Как проходит работа над сайтом: брифинг, договор, аналитика, прототип и тексты, дизайн, вёрстка, CMS, настройка и тестирование.',
	alternates: { canonical: '/stages-page' },
	openGraph: { url: '/stages-page' }
}

export default function StagesPage() {
	return (
		<PageTransition>
			<h1 className="sr-only">Этапы работы над сайтом</h1>
			<div className={styles.wrapperPageStagers}>
				<Stages stagers={stages} />
			</div>
		</PageTransition>
	)
}
