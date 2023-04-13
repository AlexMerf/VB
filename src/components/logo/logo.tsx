'use client'

import Link from 'next/link'

import styles from './styles.module.scss'

export const Logo = () => {
	return (
		<Link href="/" className={styles.logo}>
			<span>VB</span>
		</Link>
	)
}
