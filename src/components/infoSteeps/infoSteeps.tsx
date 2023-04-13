import React from 'react'

import { TitleSection } from '../title/titleSection'

import styles from './styles.module.scss'

const steps = [
	{
		id: 0,
		description: 'настраиваем SEO-оптимизацию',
		bg: 'rgba(253, 253, 253, 0.05)',
		max_width: '253px'
	},
	{
		id: 1,
		description: 'реализуем доступный интерфейс',
		bg: 'rgba(253, 253, 253, 0.05)',
		max_width: '263px'
	},
	{
		id: 2,
		description: 'оптимизируем фотографии',
		bg: 'rgba(253, 253, 253, 0.05)',
		max_width: '218px'
	},
	{
		id: 3,
		description: 'подключаем сертификат безопасности',
		bg: 'rgba(253, 253, 253, 0.05)',
		max_width: '311px'
	},
	{
		id: 4,
		description: 'увеличиваем скорость загрузки страницы',
		bg: 'rgba(253, 253, 253, 0.05)',
		max_width: '335px'
	},
	{
		id: 5,
		description:
			'настраиваем семантические теги для заголовков и подзаголовков',
		bg: 'rgba(253, 253, 253, 0.05)',
		max_width: '279px'
	}
]

export const InfoSteeps = () => {
	return (
		<section className={styles.infoSteeps}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.wrapperTitle}>
						<TitleSection
							title="Создаем сайты с нуля с адаптацией под поисковые системы и запросы пользователей"
							subTitle="личный подход к каждому проекту"
							color="var(--color-textLight)"
						/>
					</div>

					<div className={styles.steeps}>
						{steps.map((step, index) => (
							<div
								key={step.id}
								className={styles.wrapperSteep}
								style={{ '--top': `${index + 1}px` } as React.CSSProperties}
							>
								<div
									className={styles.steep}
									style={{
										backgroundColor: step.bg
									}}
								>
									<span
										style={{
											maxWidth: step.max_width
										}}
									>
										{step.description}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
