import React from 'react'

import { TitleSection } from '../title/titleSection'

import { Project } from './project/project'
import styles from './styles.module.scss'

const projects = [
	{
		id: 0,
		name: 'Intechaus',
		description: 'Многостраничный сайт для продажи фахверковых домов и бань',
		bg_image: '/image/projects/1.jpg',
		image_project: '/image/projects/1.1.jpg',
		path: 'project-1',
		tegs: [
			{ id: 0.0, label: 'тексты' },
			{ id: 1.0, label: 'дизайн' },
			{ id: 2.0, label: 'верстка' },
			{ id: 3.0, label: 'html, css, js' }
		]
	},
	{
		id: 1,
		name: 'Awerhome',
		description: 'Многостраничный сайт для продажи кухни',
		bg_image: '/image/projects/2.jpg',
		image_project: '/image/projects/2.1.jpg',
		path: '',
		tegs: [
			{ id: 0.1, label: 'тексты' },
			{ id: 1.1, label: 'дизайн' },
			{ id: 2.1, label: 'структура' },
			{ id: 3.1, label: 'верстка' },
			{ id: 4.1, label: 'html, css, js' }
		]
	},
	{
		id: 2,
		name: 'Korea Like',
		description: 'Интернет-магазин корейской косметики',
		bg_image: '/image/projects/3.jpeg',
		image_project: '/image/projects/3.1.jpg',
		path: '',
		tegs: [
			{ id: 0.2, label: 'тексты' },
			{ id: 1.2, label: 'структура' },
			{ id: 2.2, label: 'дизайн' },
			{ id: 3.2, label: 'обработка фото' }
		]
	},
	{
		id: 3,
		name: 'Heldi',
		description: 'Лэндинг для студии дизайна интерьера',
		bg_image: '/image/projects/4.jpeg',
		image_project: '/image/projects/4.1.jpg',
		path: '',
		tegs: [
			{ id: 0.3, label: 'тексты' },
			{ id: 1.3, label: 'структура' },
			{ id: 2.3, label: 'дизайн' }
		]
	}
]

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
						{projects.map(project => (
							<Project key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
