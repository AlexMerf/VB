import type { Metadata } from 'next'
import Link from 'next/link'

import { siteInfo } from '@/data/site'

import styles from './styles.module.scss'

export const metadata: Metadata = {
	title: 'Политика конфиденциальности',
	description:
		'Как обрабатываются персональные данные, которые вы отправляете через бриф на сайте VB.',
	robots: { index: false, follow: true }
}

export default function PrivacyPage() {
	return (
		<article className={styles.legal}>
			<h1>Политика конфиденциальности</h1>

			<p>
				Настоящая политика описывает, какие данные собирает сайт и как они
				используются. Оператор персональных данных — {siteInfo.name},
				контакт: <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.
			</p>

			<h2>Какие данные собираются</h2>
			<p>
				Только то, что вы сами указываете в форме брифа: имя, телефон, ник в
				Telegram, ссылка на сайт, описание бизнеса, цель сайта, список нужных
				страниц, бюджет и комментарии.
			</p>

			<h2>Зачем</h2>
			<p>
				Данные используются исключительно для того, чтобы ответить на заявку,
				оценить проект и подготовить коммерческое предложение. Они не
				передаются третьим лицам и не используются для рассылок без отдельного
				согласия.
			</p>

			<h2>Где хранятся</h2>
			<p>
				Заявки приходят в защищённый Telegram-чат и хранятся там до завершения
				обсуждения проекта. Сайт не использует рекламные трекеры и не
				устанавливает аналитические cookie.
			</p>

			<h2>Ваши права</h2>
			<p>
				Вы можете отозвать согласие на обработку и попросить удалить свои
				данные, написав на{' '}
				<a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a> или в Telegram{' '}
				<a href={`https://telegram.me/${siteInfo.telegram}`}>
					@{siteInfo.telegram}
				</a>
				.
			</p>

			<p className={styles.note}>
				Политика действует с 2026 года. При изменении состава собираемых данных
				текст будет обновлён.
			</p>

			<Link href="/" className={styles.back}>
				← на главную
			</Link>
		</article>
	)
}
