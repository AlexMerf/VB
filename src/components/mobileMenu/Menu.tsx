'use client'

import { Close } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Drawer, IconButton } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

import { INav } from '@/types/types'

import { LightTooltip } from 'ui/tooltip/CustomTooltip'

import styles from './styles.module.scss'

const listNav: INav[] = [
	{ id: 1, label: 'услуги', path: '/#cooperation' },
	{ id: 2, label: 'кейсы', path: '/#portfolio' },
	{ id: 3, label: 'этапы', path: '/stages-page' },
	{ id: 4, label: 'контакты', path: '/' }
]

export const Menu = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}

			setIsOpenMenu(open)
		}

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		const href = e.currentTarget.getAttribute('href')
		const fragment = href?.split('#')[1]
		const target = document.getElementById(fragment!)

		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			})
		}
	}

	return (
		<>
			<LightTooltip title="Меню" arrow>
				<IconButton aria-label="Меню" onClick={toggleDrawer(true)}>
					<MenuIcon />
				</IconButton>
			</LightTooltip>

			<Drawer anchor="right" open={isOpenMenu} onClose={toggleDrawer(false)}>
				<Box
					sx={{ width: '100vw' }}
					role="presentation"
					className={styles.mobileMenu}
				>
					<div className={styles.header}>
						<span className={styles.logo}>vb</span>
						<IconButton
							aria-label="close menu"
							sx={{ p: 0 }}
							onKeyDown={toggleDrawer(false)}
							onClick={toggleDrawer(false)}
						>
							<Close
								sx={{ color: 'var(--color-textLight)', fontSize: '38px' }}
							/>
						</IconButton>
					</div>
					<div className={styles.content}>
						<nav className={styles.navigate}>
							{listNav.map(item => (
								<Link
									key={item.id}
									href={item.path}
									className={styles.navigateItem}
									onClick={() => {
										if (item.path.indexOf('#') > -1) {
											handleScroll
											setIsOpenMenu(false)
										} else {
											null
										}
									}}
								>
									{item.label}
								</Link>
							))}
						</nav>
						<a href="#" className={styles.btn}>
							заполнить бриф
						</a>
						<div className={styles.social}>
							<a href="#" className={styles.socialItem}>
								inst
							</a>
							<a href="#" className={styles.socialItem}>
								tg
							</a>
							<a href="#" className={styles.socialItem}>
								wtsp
							</a>
						</div>
					</div>
				</Box>
			</Drawer>
		</>
	)
}
