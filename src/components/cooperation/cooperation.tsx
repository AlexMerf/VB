import React from 'react'

import { services } from '@/data/services'

import { TitleSection } from '../title/titleSection'

import styles from './styles.module.scss'

export const Cooperation = () => {
	return (
		<section className={styles.cooperation} id="cooperation">
			<div className="container">
				<div className={styles.content}>
					<div className={styles.topContent}>
						<div className={styles.wrapperTitle}>
							<TitleSection
								subTitle="мои услуги"
								title="Варианты сотрудничества"
								color="var(--color-textLight)"
							/>
						</div>
						<div className={styles.descriptionTitle}>
							<p>
								Стоимость зависит от объёма работы и сложности задачи.
								Учитывается количество страниц, требуемый функционал, уровень
								дизайна.
							</p>
							<p>
								Окончательная стоимость и сроки проекта рассчитываются
								индивидуально.
							</p>
						</div>
					</div>
					<div className={styles.lowerContent}>
						{services.map(item => (
							<div className={styles.lowerItem} key={item.id}>
								<div className={styles.itemTitle}>
									<span>{item.title}</span>
									<span>{item.subTitle}</span>
								</div>
								<p className={styles.itemDescription}>{item.description}</p>
								<div className={styles.itemLowerInfo}>
									<span>{item.price}</span>
									<span>{item.data}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
