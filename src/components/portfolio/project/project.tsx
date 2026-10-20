'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

import { NotFoundImage } from '@/components/notFoundImage/NotFoundImage'

import type { ProjectCard } from '@/data/schemas'

import styles from './styles.module.scss'

export const Project = ({ project }: { project: ProjectCard }) => {
	return (
		<div className={styles.project}>
			<div className={styles.title}>
				<h3 className={styles.name}>{project.name}</h3>
				<span className={styles.description}>{project.description}</span>
			</div>
			<motion.div className={styles.content}>
				<div className={styles.bgImageWrapper}>
					<NotFoundImage
						src={project.bgImage}
						width={1420}
						height={600}
						alt={project.name}
						sizes="(max-width: 768px) 100vw, 1418px"
						className={styles.bgImage}
					/>
				</div>
				<motion.div
					className={styles.imageProjectWrapper}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: false }}
					transition={{ delay: 0.5 }}
				>
					<NotFoundImage
						src={project.imageProject}
						width={700}
						height={400}
						alt={`${project.name} — превью проекта`}
						sizes="(max-width: 768px) 92vw, 700px"
						className={styles.imageProject}
					/>
				</motion.div>
				{project.external ? (
					<a
						className={styles.btn}
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						смотреть проект
					</a>
				) : (
					<Link className={styles.btn} href={project.href}>
						смотреть проект
					</Link>
				)}
			</motion.div>
			<div className={styles.tegs}>
				{project.tags.map(tag => (
					<span key={tag} className={styles.teg}>
						{tag}
					</span>
				))}
			</div>
		</div>
	)
}
