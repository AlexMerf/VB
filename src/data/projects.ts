import { z } from 'zod'

import project1Json from './project_1.json'
import project2Json from './project_2.json'

import { project2CaseSchema, projectCardSchema, projectCaseSchema } from './schemas'

export const project1Case = projectCaseSchema.parse(project1Json)
export const project2Case = project2CaseSchema.parse(project2Json)

export const projectCards = z.array(projectCardSchema).parse([
	{
		id: 'awerhome',
		name: 'Awerhome',
		description: 'Многостраничный сайт для продажи кухни',
		bgImage: '/image/projects/2.webp',
		imageProject: '/image/projects/2.1.webp',
		href: '/project-2',
		tags: ['тексты', 'дизайн', 'структура', 'верстка', 'html, css, js']
	},
	{
		id: 'intechaus',
		name: 'Intechaus',
		description: 'Многостраничный сайт для продажи фахверковых домов и бань',
		bgImage: '/image/projects/1.webp',
		imageProject: '/image/projects/1.1.webp',
		href: '/project-1',
		tags: ['тексты', 'дизайн', 'верстка', 'html, css, js']
	},
	{
		id: 'korea-like',
		name: 'Korea Like',
		description: 'Интернет-магазин корейской косметики',
		bgImage: '/image/projects/3.webp',
		imageProject: '/image/projects/3.1.webp',
		href: 'https://www.behance.net/gallery/149731759/Korea-Like-sosmetic-online-store',
		external: true,
		tags: ['тексты', 'структура', 'дизайн', 'обработка фото']
	},
	{
		id: 'heldi',
		name: 'Heldi',
		description: 'Лэндинг для студии дизайна интерьера',
		bgImage: '/image/projects/4.webp',
		imageProject: '/image/projects/4.1.webp',
		href: 'https://www.behance.net/gallery/149227929/Interior-Design',
		external: true,
		tags: ['тексты', 'структура', 'дизайн']
	}
])
