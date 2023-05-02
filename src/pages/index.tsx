'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Home } from 'screens/home/Home'

export default function HomePage() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Home />
			</motion.div>
		</AnimatePresence>
	)
}
