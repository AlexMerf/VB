import Link from 'next/link'

import styles from './not-found.module.scss'

export default function NotFound() {
	return (
		<section className={styles.notFound}>
			<span className={styles.code}>404</span>
			<h1 className={styles.title}>Такой страницы нет</h1>
			<p className={styles.text}>
				Возможно, она переехала или в ссылке опечатка. Вернитесь на главную —
				там всё на месте.
			</p>
			<Link href="/" className={styles.link}>
				на главную
			</Link>
		</section>
	)
}
