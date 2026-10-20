'use client'

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { siteInfo } from '@/data/site'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { Logo } from '../logo/logo'
import { Menu } from '../mobileMenu/Menu'
import { Navigation } from '../navigation/navigation'

import styles from './styles.module.scss'

export const Header = () => {
	const [show, setShow] = useState(true)
	const lastScrollY = useRef(0)
	const isMobile = useMediaQuery('(max-width: 768px)')

	useEffect(() => {
		const onScroll = () => {
			const current = window.scrollY
			setShow(current <= lastScrollY.current)
			lastScrollY.current = current
		}

		window.addEventListener('scroll', onScroll, { passive: true })

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<motion.header
			className={styles.header}
			initial={{ y: -200 }}
			animate={{ y: show ? 0 : -200 }}
		>
			<div className="container">
				<div className={styles.content}>
					<Logo />
					<Navigation />
					<div className={styles.social}>
						<a href={siteInfo.instagram}>inst</a>
						<a href={`https://wa.me/${siteInfo.whatsapp}`}>wtsp</a>
						<a href={`https://telegram.me/${siteInfo.telegram}`}>tg</a>
					</div>
					{isMobile && <Menu />}
				</div>
			</div>
		</motion.header>
	)
}
