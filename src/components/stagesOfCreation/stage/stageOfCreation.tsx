import React from 'react'

import { TitleSection } from '@/components/title/titleSection'

import styles from './styles.module.scss'

export const StageOfCreation = ({
	children,
	title,
	subTitle,
	titleDescription
}: {
	children?: React.ReactNode
	title: string
	subTitle: string
	titleDescription: string
}) => {
	return (
		<div className={styles.step}>
			<div className={styles.wrapperTitle}>
				<TitleSection
					title={title}
					color="var(--color-textDark)"
					subTitle={subTitle}
				/>
				<p className={styles.description}>{titleDescription}</p>
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
