import { motion } from 'framer-motion'
import React from 'react'

import styles from './styles.module.scss'

export const StageOfCreation = ({
	children,
	title,
	subTitle,
	titleDescription,
	flexColumnTitle = false,
	felxDirection = false
}: {
	children?: React.ReactNode
	title: string
	subTitle: string
	titleDescription: string
	flexColumnTitle?: boolean
	felxDirection?: boolean
}) => {
	return (
		<div className={styles.step}>
			<div
				className={styles.wrapperTitle}
				style={{
					flexDirection: flexColumnTitle ? 'column' : 'row'
				}}
			>
				<div className={styles.titleWrap}>
					{subTitle && (
						<motion.span
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: false }}
							transition={{ delay: 0.5 }}
							className={styles.subTitle}
							style={{
								color: 'var(--color-textDark)'
							}}
						>
							{subTitle}
						</motion.span>
					)}

					<h2
						className={styles.title}
						style={{
							color: 'var(--color-textDark)'
						}}
					>
						{title}
					</h2>
				</div>

				<p className={styles.description}>{titleDescription}</p>
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
