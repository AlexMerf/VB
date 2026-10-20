'use client'

import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'
import { useEffect, useState } from 'react'

import type { INav } from '@/types/types'
import { CloseIcon, MenuIcon } from '@/ui/icons'

import data from '../../data/info.json'

import styles from './styles.module.scss'

const listNav: INav[] = [
	{ id: 1, label: 'услуги', path: '/#cooperation' },
	{ id: 2, label: 'кейсы', path: '/#portfolio' },
	{ id: 3, label: 'этапы', path: '/stages-page' },
	{ id: 4, label: 'контакты', path: '/#contacts' }
]

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		if (!isOpen) return

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsOpen(false)
		}

		document.addEventListener('keydown', onKeyDown)
		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			document.body.style.overflow = previousOverflow
		}
	}, [isOpen])

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		const href = event.currentTarget.getAttribute('href') ?? ''
		if (!href.startsWith('/#') || pathname !== '/') {
			setIsOpen(false)
			return
		}

		const target = document.getElementById(href.slice(2))
		if (!target) {
			setIsOpen(false)
			return
		}

		event.preventDefault()
		setIsOpen(false)
		target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
		window.history.replaceState(null, '', href)
	}

	return (
		<>
			<button
				type="button"
				aria-label="Меню"
				aria-expanded={isOpen}
				className={styles.menuButton}
				onClick={() => setIsOpen(true)}
			>
				<MenuIcon />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={styles.overlay}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							role="dialog"
							aria-modal="true"
							aria-label="Меню"
							className={styles.mobileMenu}
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							onClick={event => event.stopPropagation()}
						>
							<div className={styles.header}>
								<span className={styles.logo}>vb</span>
								<button
									type="button"
									aria-label="Закрыть меню"
									className={styles.closeButton}
									onClick={() => setIsOpen(false)}
								>
									<CloseIcon size={38} />
								</button>
							</div>
							<div className={styles.content}>
								<nav className={styles.navigate}>
									{listNav.map(item => (
										<Link
											key={item.id}
											href={item.path}
											className={styles.navigateItem}
											onClick={handleClick}
										>
											{item.label}
										</Link>
									))}
								</nav>
								<Link href="/brif" className={styles.btn} onClick={() => setIsOpen(false)}>
									заполнить бриф
								</Link>
								<div className={styles.social}>
									<a href={data.instagram} className={styles.socialItem}>
										inst
									</a>
									<a
										href={`https://telegram.me/${data.telegram}`}
										className={styles.socialItem}
									>
										tg
									</a>
									<a href={`https://wa.me/${data.whatsapp}`} className={styles.socialItem}>
										wtsp
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
