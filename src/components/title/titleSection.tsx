'use client'

import styles from './styles.module.scss'

export const TitleSection = ({
	subTitle,
	title,
	color
}: {
	subTitle?: string
	title: string
	color?: string
}) => {
	return (
		<div className={styles.titleWrap}>
			{subTitle && (
				<span
					className={styles.subTitle}
					style={{
						color: color
					}}
				>
					{subTitle}
				</span>
			)}
			<h2
				className={styles.title}
				style={{
					color: color
				}}
			>
				{title}
			</h2>
		</div>
	)
}
