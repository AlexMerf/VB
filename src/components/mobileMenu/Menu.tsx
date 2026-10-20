'use client'

import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { siteInfo } from '@/data/site'
import type { INav } from '@/types/types'
import { CloseIcon, MenuIcon } from '@/ui/icons'

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
	const triggerRef = useRef<HTMLButtonElement>(null)
	const dialogRef = useRef<HTMLDivElement>(null)
	const closeRef = useRef<HTMLButtonElement>(null)

	const close = useCallback(() => {
		setIsOpen(false)
		triggerRef.current?.focus()
	}, [])

	useEffect(() => {
		if (!isOpen) return

		closeRef.current?.focus()

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				close()
				return
			}

			if (event.key !== 'Tab' || !dialogRef.current) return

			const focusable = Array.from(
				dialogRef.current.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled])'
				)
			)
			if (focusable.length === 0) return

			const first = focusable[0]
			const last = focusable[focusable.length - 1]

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault()
				last.focus()
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault()
				first.focus()
			}
		}

		document.addEventListener('keydown', onKeyDown)
		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			document.body.style.overflow = previousOverflow
		}
	}, [isOpen, close])

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		const href = event.currentTarget.getAttribute('href') ?? ''
		if (!href.startsWith('/#') || pathname !== '/') {
			close()
			return
		}

		const target = document.getElementById(href.slice(2))
		if (!target) {
			close()
			return
		}

		event.preventDefault()
		close()
		target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
		window.history.replaceState(null, '', href)
	}

	return (
		<>
			<button
				ref={triggerRef}
				type="button"
				aria-label="Меню"
				aria-expanded={isOpen}
				aria-haspopup="dialog"
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
						onClick={close}
					>
						<motion.div
							ref={dialogRef}
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
									ref={closeRef}
									type="button"
									aria-label="Закрыть меню"
									className={styles.closeButton}
									onClick={close}
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
								<Link href="/brif" className={styles.btn} onClick={close}>
									заполнить бриф
								</Link>
								<div className={styles.social}>
									<a
										href={siteInfo.instagram}
										className={styles.socialItem}
										aria-label="Instagram inst"
									>
										inst
									</a>
									<a
										href={`https://telegram.me/${siteInfo.telegram}`}
										className={styles.socialItem}
										aria-label="Telegram tg"
									>
										tg
									</a>
									<a
										href={`https://wa.me/${siteInfo.whatsapp}`}
										className={styles.socialItem}
										aria-label="WhatsApp wtsp"
									>
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
