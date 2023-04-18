'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { ImageComponent } from './imageComponent/imageComponent'
import styles from './styles.module.scss'

const imageList = [
	{
		id: 0,
		src: '/image/hero/20.webp',
		width: 365,
		height: 998,
		alt: 'Image',
		variant: 'up'
	},
	{
		id: 1,
		src: '/image/hero/30.webp',
		width: 359,
		height: 998,
		alt: 'Image',
		variant: 'down'
	},
	{
		id: 2,
		src: '/image/hero/10.webp',
		width: 331,
		height: 998,
		alt: 'Image',
		variant: 'up'
	},
	{
		id: 3,
		src: '/image/hero/40.webp',
		width: 547,
		height: 998,
		alt: 'Image',
		variant: 'down'
	}
]

export const BoxImage = () => {
	const [lastScrollY, setLastScrollY] = useState(0)

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			setLastScrollY(window.scrollY)
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar)

			return () => {
				window.removeEventListener('scroll', controlNavbar)
			}
		}
	}, [lastScrollY])

	return (
		<div className={styles.BoxImage}>
			<span className={styles.descriptions}>
				дизайн, который привлекает и продает контент, который мотивирует купить
			</span>
			<div className={styles.formImage}>
				<motion.div className={styles.wrapperImages}>
					{imageList.map(item => (
						<div
							key={item.id}
							className={styles.wrapperImage}
							style={{ width: `${item.width}px` }}
						>
							<ImageComponent
								src={item.src}
								width={item.width}
								height={item.height}
								alt={item.alt}
								lastScrollY={lastScrollY}
								variant={item.variant}
							/>
						</div>
					))}
				</motion.div>
			</div>

			<Link className={styles.btn} href="/brif">
				заказать сайт
			</Link>
		</div>
	)
}
