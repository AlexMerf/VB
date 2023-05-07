import React from 'react'

import { TitleSection } from '../title/titleSection'

import styles from './styles.module.scss'

const list = [
	{
		id: 0,
		title: 'одностраничный сайт',
		subTitle: '(лэндинг)',
		description:
			'Лэндинг это — сайт с краткой информацией о товаре, услуге или мероприятии. Его задача — превращать посетителей в клиентов.',
		price: 'от 30 000 ₽',
		data: 'от 14 дней'
	},
	{
		id: 1,
		title: 'многостраничный сайт',
		subTitle: '(корпоративный)',
		description:
			'Сайт с более сложной структурой, состоящий из нескольких страниц, для подробного знакомства с компанией/услугами.',
		price: 'от 40 000 ₽',
		data: 'от 21 дней'
	},
	{
		id: 2,
		title: 'дизайн-макета',
		subTitle: '(figma)',
		description:
			'Одностраничный или многостраничный дизайн в фигме с адаптацией под разные разрешения. Макет будет подготовлен для дальнейшей передачи разработчикам.',
		price: 'от 20 000 ₽',
		data: 'от 10 дней'
	}
]

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
						{list.map(item => (
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
