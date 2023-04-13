'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import { INav } from '@/types/types'

import styles from './styles.module.scss'

const listNav: INav[] = [
	{ id: 1, label: 'услуги', path: '/#cooperation' },
	{ id: 2, label: 'кейсы', path: '/#portfolio' },
	{ id: 3, label: 'этапы', path: '/stages-page' },
	{ id: 4, label: 'бриф', path: '/' },
	{ id: 5, label: 'контакты', path: '/' }
]

export const Navigation = () => {
	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		const href = e.currentTarget.getAttribute('href')
		const fragment = href?.split('#')[1]
		const target = document.getElementById(fragment!)
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			})
		}
	}

	return (
		<motion.nav
			className={styles.navigation}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1 }}
		>
			{listNav.map(item => (
				<Link
					key={item.id}
					href={item.path}
					onClick={() => {
						if (item.path.indexOf('#') > -1) {
							handleScroll
						} else {
							null
						}
					}}
				>
					{item.label}
				</Link>
			))}
		</motion.nav>
	)
}
