import Link from 'next/link'
import React from 'react'

import { TitleSection } from '../title/titleSection'
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
							<span className={styles.subTitle}>этапы</span>
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
