'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

import type { Stage } from '@/data/schemas'

import { ArrowUp, OvalIcon } from '@/ui/icons'

import { StagesList } from './stagesList/stagesList'
import styles from './styles.module.scss'

export const Stages = ({ stagers }: { stagers: Stage[] }) => {
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
										size="11.6em"
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
							<ArrowUp style={{ color: 'var(--color-textDark)' }} />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
