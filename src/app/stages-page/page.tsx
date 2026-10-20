import type { Metadata } from 'next'

import { PageTransition } from '@/components/layout/PageTransition'
import { Stages } from '@/components/stages/stages'

import stagers from '@/data/stagers.json'

import styles from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Этапы работы',
	description:
		'Как проходит работа над сайтом: брифинг, договор, аналитика, прототип и тексты, дизайн, вёрстка, CMS, настройка и тестирование.',
	alternates: { canonical: '/stages-page' }
}

export default function StagesPage() {
	return (
		<PageTransition>
			<div className={styles.wrapperPageStagers}>
				<Stages stagers={stagers} />
			</div>
		</PageTransition>
	)
}
