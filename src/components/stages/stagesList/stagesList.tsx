import React from 'react'

import type { Stage } from '@/data/schemas'

import styles from './styles.module.scss'

export const StagesList = ({ data }: { data: Stage[] }) => {
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
