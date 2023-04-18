'use client'

import cn from 'classnames'
import React from 'react'

import { NotFoundImage } from '../notFoundImage/NotFoundImage'
import { OvalIcon } from 'ui/icons'

import styles from './styles.module.scss'

const info = [
	{
		id: 0,
		title: 'сайты, которые работают',
		description: 'моя цель — создавать удобный и интуитивно понятный продукт'
	},
	{
		id: 1,
		title: 'не просто рисую картинки',
		description:
			'а провожу анализ бизнеса, создаю уникальный и продуманный дизайн с учетом ваших пожеланий'
	},
	{
		id: 2,
		title: 'прозрачность в действии',
		description:
			'шаг за шагом, предоставлю отчет о каждом этапе проделанной работы'
	},
	{
		id: 3,
		title: 'полная помощь после запуска',
		description:
			'после запуска сайта не бросаю клиента, а предлагаю ему поддержку и помощь'
	}
]

export const About = () => {
	return (
		<section className={styles.about}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.topBlock}>
						<div className={styles.aboutBlockText}>
							<span className={styles.subTitle}>о работе со мной</span>
							<span className={cn(styles.aboutTextColor, styles.aboutText)}>
								Меня зовут Валерия.
							</span>
							<p className={styles.aboutText}>
								Я разрабатываю сайты более 2-х лет. Работаю в команде с опытным
								разработчиком и мы{' '}
								<span className={styles.aboutTextColor}>
									создаем сайты{' '}
									<span
										style={{ position: 'relative', display: 'inline-block' }}
									>
										<OvalIcon
											sx={{ fontSize: '6.6em' }}
											className={styles.ovalIcon}
										/>
										под ключ
									</span>
								</span>{' '}
								на чистом коде любой сложности
							</p>
						</div>
						<NotFoundImage
							width={352}
							height={352}
							src="/image/valeria.webp"
							alt="Image"
							className={styles.image}
						/>
					</div>
					<div className={styles.lowerBlock}>
						{info.map(item => (
							<div key={item.id} className={styles.box}>
								<span className={styles.boxTitle}>{item.title}</span>
								<p className={styles.boxinfo}>{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
