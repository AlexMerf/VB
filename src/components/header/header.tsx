'use client'

import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import dataInfo from '@/data/info.json'

import { Logo } from '../logo/logo'
import { Menu } from '../mobileMenu/Menu'
import { Navigation } from '../navigation/navigation'

import styles from './styles.module.scss'

export const Header = () => {
	const [show, setShow] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	const matches = useMediaQuery('(max-width: 768px)')

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > lastScrollY) {
				setShow(false)
			} else {
				setShow(true)
			}

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
		<motion.header
			className={styles.header}
			initial={{ y: -200 }}
			animate={{ y: show ? 0 : -200 }}
		>
			<motion.div className="container">
				<div className={styles.content}>
					<Logo />
					<Navigation />
					<motion.div className={styles.social}>
						<a href={dataInfo.instagram}>inst</a>
						<a href={`https://wa.me/${dataInfo.whatsapp}`}>wtsp</a>
					</motion.div>
					{matches && <Menu />}
				</div>
			</motion.div>
		</motion.header>
	)
}
