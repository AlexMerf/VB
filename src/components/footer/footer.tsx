'use client'

import Link from 'next/link'

import dataInfo from '@/data/info.json'

import { TitleSection } from '../title/titleSection'
import { ArrowUp } from 'ui/icons'

import styles from './styles.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer} id="contacts">
			<div className="container">
				<div className={styles.content}>
					<div className={styles.contentTop}>
						<div className={styles.blockLeft}>
							<TitleSection
								title="Поработаем вместе?"
								subTitle="мои услуги"
								color="var(--color-bg)"
							/>
							<Link href="/brif" className={styles.brif}>
								заполнить бриф
							</Link>
						</div>
						<div className={styles.blockRight}>
							<span className={styles.topRight}>
								Давайте создадим нечто прекрасное. Напишите мне и мы обсудим ваш
								проект.
							</span>
							<ul className={styles.midleRight}>
								<li>
									<span>telegram</span>
									<a href={`https://telegram.me/${dataInfo.telegram}`}>
										@{dataInfo.telegram}
									</a>
								</li>
								<li>
									<span>whatsapp</span>
									<a href={`https://wa.me/${dataInfo.whatsapp}`}>
										8 (914) 364 - 05 - 59
									</a>
								</li>
							</ul>
							<div className={styles.lowerRight}>
								<a href={dataInfo.behance} className={styles.btnSocial}>
									behance
								</a>
								<a href={dataInfo.instagram} className={styles.btnSocial}>
									instagram
								</a>
								<a
									href={`mailto:${dataInfo.email}`}
									className={styles.btnSocial}
								>
									email
								</a>
							</div>
						</div>
					</div>
					<div className={styles.contentLower}>
						<a href="#" className={styles.politic}>
							Политика конфиденциальности
						</a>
						<button
							className={styles.arrowUp}
							onClick={() => {
								window.scrollTo({ top: 0, behavior: 'smooth' })
							}}
						>
							<span>наверх</span>
							<ArrowUp sx={{ fontSize: '10px' }} />
						</button>
					</div>
				</div>
			</div>
		</footer>
	)
}
