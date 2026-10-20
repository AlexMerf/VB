'use client'

import Image from 'next/image'
import { useState } from 'react'

import { ImageOffIcon } from '@/ui/icons'

import styles from './styles.module.scss'

type NotFoundImageProps = {
	className?: string
	alt: string
	src: string
	width: number
	height: number
	sizes?: string
}

export const NotFoundImage = ({
	className,
	alt,
	src,
	width,
	height,
	sizes
}: NotFoundImageProps) => {
	const [hasError, setHasError] = useState(false)

	if (!src || hasError) {
		return (
			<div className={styles.imageBlur} role="img" aria-label={alt}>
				<ImageOffIcon size={100} />
			</div>
		)
	}

	return (
		<Image
			src={src}
			width={width}
			height={height}
			alt={alt}
			sizes={sizes}
			quality={75}
			className={className}
			onError={() => setHasError(true)}
		/>
	)
}
