'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Stagers } from 'screens/stagers/Stagers'

export default function StagersPage() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Stagers />
			</motion.div>
		</AnimatePresence>
	)
}
