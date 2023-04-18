'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface IImage {
	src: string
	width: number
	height: number
	alt: string
	lastScrollY: number
	variant?: string
}

export const ImageComponent = ({
	src,
	width,
	height,
	alt,
	lastScrollY,
	variant
}: IImage) => {
	return (
		<>
			<motion.div className="wrapperimageAnimation">
				<Image
					src={src}
					width={width}
					height={height}
					alt={alt}
					className="imageAnimation"
					style={
						{
							'--value': `${lastScrollY}px`,
							'--variant': `${
								variant === 'up' ? '-1' : variant === 'down' ? '1' : '1'
							}`
						} as React.CSSProperties
					}
					quality={100}
					unoptimized={true}
				/>
			</motion.div>

			<motion.div className="wrapperimageAnimation">
				<Image
					src={src}
					width={width}
					height={height}
					alt={alt}
					className="imageAnimation"
					style={
						{
							'--value': `${lastScrollY}px`,
							'--variant': `${
								variant === 'up' ? '-1' : variant === 'down' ? '1' : '1'
							}`
						} as React.CSSProperties
					}
					quality={100}
					unoptimized={true}
				/>
			</motion.div>

			<motion.div className="wrapperimageAnimation">
				<Image
					src={src}
					width={width}
					height={height}
					alt={alt}
					className="imageAnimation"
					style={
						{
							'--value': `${lastScrollY}px`,
							'--variant': `${
								variant === 'up' ? '-1' : variant === 'down' ? '1' : '1'
							}`
						} as React.CSSProperties
					}
					quality={100}
					unoptimized={true}
				/>
			</motion.div>
		</>
	)
}
