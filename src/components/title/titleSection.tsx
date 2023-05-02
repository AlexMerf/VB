import { motion } from 'framer-motion'

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
				<motion.span
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false }}
					transition={{ delay: 0.5 }}
					className={styles.subTitle}
					style={{
						color: color
					}}
				>
					{subTitle}
				</motion.span>
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
