'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import { ArrowUp, OvalIcon } from 'ui/icons'

import { StagesList } from './stagesList/stagesList'
import styles from './styles.module.scss'

interface IStages {
	id: number
	number: string
	content: IStagesContent[]
}

interface IStagesContent {
	id: number
	title: string
	description: string
}

export const Stages = ({ stagers }: { stagers: IStages[] }) => {
	return (
		<section className={styles.stagesWrapper}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.wrapperTitle}>
						<div className={styles.titleWrap}>
							<motion.span
								className={styles.subTitle}
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false }}
								transition={{ delay: 0.5 }}
							>
								этапы
							</motion.span>
							<h2 className={styles.title}>
								О том, как происходит{' '}
								<span style={{ position: 'relative', display: 'inline-block' }}>
									<OvalIcon
										sx={{ fontSize: '11.6em' }}
										className={styles.ovalIcon}
									/>
									развитие проекта
								</span>
							</h2>
						</div>
						<p className={styles.description}>
							Я аккуратно планирую проекты и всегда устанавливаю четкие
							дедлайны. А также поддерживаю связь с заказчиком, чтобы учитывать
							его требования и пожелания на всех этапах работы
						</p>
					</div>

					<StagesList data={stagers} />
					<div className={styles.wrapperLink}>
						<Link href="stages-page" className={styles.link}>
							<span>все этапы</span>
							<ArrowUp
								sx={{
									fontSize: '10px',
									'& path': {
										stroke: '#333644'
									}
								}}
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
