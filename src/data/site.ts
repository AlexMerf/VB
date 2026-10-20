import infoJson from './info.json'

import type { SiteInfo } from './schemas'

// Без zod: файл импортируется и клиентскими компонентами (шапка, меню, футер).
// Валидность info.json проверяется на сборке через validateContent().
export const siteInfo = infoJson as SiteInfo

export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://vb-olive.vercel.app'
