import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { NotFoundImage } from '@/components/notFoundImage/NotFoundImage'

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
					<NotFoundImage
						src={project.bg_image}
						width={1420}
						height={600}
						alt="Image"
						className={styles.bgImage}
					/>
					{/* <Image
						src={project.bg_image}
						width={1420}
						height={600}
						alt="Image"
						quality={100}
						className={styles.bgImage}
					/> */}
				</div>
				<motion.div className={styles.imageProjectWrapper}>
					{/* <Image
						src={project.image_project}
						width={700}
						height={400}
						alt="Image"
						quality={100}
						className={styles.imageProject}
					/> */}
					<NotFoundImage
						src={project.image_project}
						width={700}
						height={400}
						alt="Image"
						className={styles.imageProject}
					/>
				</motion.div>
				<Link className={styles.btn} href={project.path}>
					смотреть проект
				</Link>
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
