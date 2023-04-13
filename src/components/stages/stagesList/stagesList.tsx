import React from 'react'

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

export const StagesList = ({ data }: { data: IStages[] }) => {
	return (
		<div className={styles.stages}>
			{data &&
				data.map(item => (
					<div key={item.id} className={styles.stage}>
						<span className={styles.number}>{item.number}</span>
						<div className={styles.stageContent}>
							<dl>
								{item.content.map(innerItem => (
									<div key={innerItem.id}>
										<dt>{innerItem.title}</dt>
										<dd>{innerItem.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				))}
		</div>
	)
}
