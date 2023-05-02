'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Project_1 } from 'screens/projects/projects1/project_1'

export default function Project_1Page() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Project_1 />
			</motion.div>
		</AnimatePresence>
	)
}
