'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Brif } from 'screens/brif/Brif'

export default function BrifPage() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Brif />
			</motion.div>
		</AnimatePresence>
	)
}
