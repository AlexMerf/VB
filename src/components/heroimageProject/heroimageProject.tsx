import Image from 'next/image'
import React from 'react'

import { IProjectSet } from '@/types/types'

import { NotFoundImage } from '../notFoundImage/NotFoundImage'

import styles from './styles.module.scss'

export const HeroimageProject = ({ data }: { data: IProjectSet }) => {
	return (
		<section className={styles.heroimageProject}>
			<div className="container">
				<div className={styles.content}>
					<h1 className={styles.title}>{data.title}</h1>
					<div className={styles.tegs}>
						{data.tegs.map(teg => (
							<div key={teg.id} className={styles.teg}>
								<span>{teg.label}</span>
							</div>
						))}
					</div>
					<div className={styles.wrapperImage}>
						<NotFoundImage
							width={1420}
							height={600}
							src={data.hero_image}
							alt={data.hero_image_description}
							className={styles.heroImage}
						/>
					</div>
					<div className={styles.steps}>
						<div className={styles.step_one}>
							<h3 className={styles.step__title}>{data.step_one.title_step}</h3>
							<p className={styles.step__description}>
								{data.step_one.description_step}
							</p>
						</div>
						<div className={styles.step_two}>
							<h3 className={styles.step__title}>{data.step_two.title_step}</h3>
							<p className={styles.step__description}>
								{data.step_two.description_step}
							</p>
						</div>
						<div className={styles.step_three}>
							<div>
								{data.step_three.map(item => (
									<div key={item.id} className={styles.wrapper}>
										<p className={styles.count}>{item.count}</p>
										<span className={styles.text}>{item.text}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
