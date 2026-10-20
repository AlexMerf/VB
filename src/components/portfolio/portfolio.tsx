import React from 'react'

import { projectCards } from '@/data/projects'

import { TitleSection } from '../title/titleSection'

import { Project } from './project/project'
import styles from './styles.module.scss'

export const Portfolio = () => {
	return (
		<section className={styles.portfolio} id="portfolio">
			<div className="container">
				<div className={styles.content}>
					<TitleSection
						title="Каждый проект уникален"
						subTitle="мое портфолио"
						color="var(--color-bg)"
					/>
					<div className={styles.projects}>
						{projectCards.map(project => (
							<Project key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
