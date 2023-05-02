'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Project_2 } from 'screens/projects/projects2/project_2'

export default function Project_2Page() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<Project_2 />
			</motion.div>
		</AnimatePresence>
	)
}
