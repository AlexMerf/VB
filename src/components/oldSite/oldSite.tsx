import Image from 'next/image'
import React from 'react'

import { IProjectSet } from '@/types/types'

import styles from './styles.module.scss'

export const OldSite = ({ data }: { data: IProjectSet }) => {
	return (
		<section>
			<div className="container">
				<div className={styles.content}>
					<h2 className={styles.title}>{data.old_sites_title}</h2>
					<div className={styles.items}>
						{data.old_sites.map(item => (
							<div key={item.id} className={styles.item}>
								<div className={styles.wrapperImage}>
									<Image
										width={695}
										height={405}
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
