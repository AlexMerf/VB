'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

import styles from './styles.module.scss'

export const PageTransition = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			className={styles.page}
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
		>
			{children}
		</motion.div>
	)
}
