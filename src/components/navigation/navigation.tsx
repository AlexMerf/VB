'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'

import type { INav } from '@/types/types'

import styles from './styles.module.scss'

const listNav: INav[] = [
	{ id: 1, label: 'услуги', path: '/#cooperation' },
	{ id: 2, label: 'кейсы', path: '/#portfolio' },
	{ id: 3, label: 'этапы', path: '/stages-page' },
	{ id: 4, label: 'бриф', path: '/brif' },
	{ id: 5, label: 'контакты', path: '/#contacts' }
]

export const Navigation = () => {
	const pathname = usePathname()

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		const href = event.currentTarget.getAttribute('href') ?? ''

		// На других страницах навигацию и скролл к секции делает Next.js.
		if (!href.startsWith('/#') || pathname !== '/') return

		const target = document.getElementById(href.slice(2))
		if (!target) return

		event.preventDefault()
		target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
		window.history.replaceState(null, '', href)
	}

	return (
		<motion.nav
			className={styles.navigation}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1 }}
		>
			{listNav.map(item => (
				<Link key={item.id} href={item.path} onClick={handleClick}>
					{item.label}
				</Link>
			))}
		</motion.nav>
	)
}
