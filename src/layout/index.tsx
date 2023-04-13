'use client'

import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'

import styles from './styles.module.scss'

export default function Layout({ children }: { children?: any }) {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}
