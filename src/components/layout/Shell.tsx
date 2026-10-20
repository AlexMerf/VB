import type { ReactNode } from 'react'

import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'

import styles from './styles.module.scss'

export const Shell = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}
