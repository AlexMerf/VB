import { HideImage } from '@mui/icons-material'
import cn from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

export const NotFoundImage = ({
	className,
	alt,
	src,
	width,
	height
}: {
	className?: string
	alt: string
	src: string
	width: number
	height: number
}) => {
	const [isHideImage, setIsHideImage] = useState(false)

	return (
		<>
			{isHideImage === true ? (
				<div className={styles.imageBlur}>
					<HideImage sx={{ fontSize: 100 }} />
				</div>
			) : (
				<Image
					src={src}
					width={width}
					height={height}
					alt={alt}
					className={cn(className, styles.image)}
					onError={() => setIsHideImage(true)}
					quality={100}
				/>
			)}
		</>
	)
}
