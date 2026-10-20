import React from 'react'

import type { ProjectCase } from '@/data/schemas'

import { NotFoundImage } from '../notFoundImage/NotFoundImage'

import styles from './styles.module.scss'

export const OldSite = ({
	data,
	widthImg,
	heightImg
}: {
	data: ProjectCase
	widthImg: number
	heightImg: number
}) => {
	return (
		<section className={styles.oldSite}>
			<div className="container">
				<div className={styles.content}>
					<h2 className={styles.title}>{data.old_sites_title}</h2>
					<div className={styles.items}>
						{data.old_sites.map(item => (
							<div key={item.id} className={styles.item}>
								<div className={styles.wrapperImage}>
									<NotFoundImage
										width={widthImg}
										height={heightImg}
										src={item.img_url}
										alt={item.description}
										sizes={`(max-width: 768px) 100vw, ${widthImg}px`}
										className={styles.image}
									/>
								</div>
								<p className={styles.description}>{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
