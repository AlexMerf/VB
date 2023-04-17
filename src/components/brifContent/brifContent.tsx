'use client'

import React from 'react'

import { BrifForm } from './form/brifForm'
import styles from './styles.module.scss'

export const BrifContent = () => {
	return (
		<section className={styles.brid}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>Бриф на разработку сайта под ключ</h1>
						<span className={styles.description}>
							Пожалуйста, заполните небольшую форму, чтобы я могла оценить
							сложность и объем вашего проекта и рассчитать предварительную
							стоимость. Это займет у вас около 10-15 минут.
						</span>
					</div>
					<BrifForm />
				</div>
			</div>
		</section>
	)
}
