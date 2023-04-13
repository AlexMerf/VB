'use client'

import React from 'react'

import { BoxImage } from '../heroBoxImages'
import { OvalIcon } from 'ui/icons'

import styles from './styles.module.scss'

export const Heroimage = () => {
	return (
		<section className={styles.heroimage}>
			<div className="container">
				<div className={styles.content}>
					<h1 className={styles.title}>
						Помогаю бизнесам создавать запоминающиеся сайты, которые
						<span>
							<OvalIcon
								sx={{ fontSize: '8.5em' }}
								className={styles.ovalIcon}
							/>
							выделят вас
						</span>
						на рынке
					</h1>
					<BoxImage />
				</div>
			</div>
		</section>
	)
}
