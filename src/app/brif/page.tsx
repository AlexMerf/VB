import type { Metadata } from 'next'

import { BrifContent } from '@/components/brifContent/brifContent'
import { PageTransition } from '@/components/layout/PageTransition'

export const metadata: Metadata = {
	title: 'Бриф на разработку сайта',
	description:
		'Заполните бриф, чтобы я оценила сложность и объём проекта и рассчитала предварительную стоимость сайта.',
	alternates: { canonical: '/brif' },
	openGraph: { url: '/brif' }
}

export default function BrifPage() {
	return (
		<PageTransition>
			<BrifContent />
		</PageTransition>
	)
}
