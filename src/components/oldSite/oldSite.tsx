import Image from 'next/image'
import React from 'react'

import { IProjectSet } from '@/types/types'

import styles from './styles.module.scss'

export const OldSite = ({
	data,
	widthImg,
	heightImg
}: {
	data: IProjectSet
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
									<Image
										width={widthImg}
										height={heightImg}
										src={item.img_url}
										alt={item.description}
										quality={100}
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
