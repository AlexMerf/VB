import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { IProject } from '@/types/types'

import styles from './styles.module.scss'

export const Project = ({ project }: { project: IProject }) => {
	return (
		<div className={styles.project}>
			<div className={styles.title}>
				<h3 className={styles.name}>{project.name}</h3>
				<span className={styles.description}>{project.description}</span>
			</div>
			<motion.div className={styles.content}>
				<div className={styles.bgImageWrapper}>
					<Image
						src={project.bg_image}
						width={1420}
						height={600}
						alt="Image"
						quality={100}
						className={styles.bgImage}
					/>
				</div>
				<motion.div className={styles.imageProjectWrapper}>
					<Image
						src={project.image_project}
						width={700}
						height={400}
						alt="Image"
						quality={100}
						className={styles.imageProject}
					/>
				</motion.div>
				<a className={styles.btn} href={project.path}>
					смотреть проект
				</a>
			</motion.div>
			<div className={styles.tegs}>
				{project.tegs.map((teg: any) => (
					<span key={teg.id} className={styles.teg}>
						{teg.label}
					</span>
				))}
			</div>
		</div>
	)
}