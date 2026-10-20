import { z } from 'zod'

export const siteInfoSchema = z.object({
	name: z.string().min(1),
	phone: z.string().min(5),
	phone_visible: z.string().min(5),
	telegram: z.string().min(1),
	whatsapp: z.string().min(5),
	instagram: z.string().url(),
	behance: z.string().url(),
	email: z.string().email()
})

export const stagerSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	img_url: z.string().optional(),
	img_url_1: z.string().optional(),
	img_url_2: z.string().optional(),
	img_url_3: z.string().optional(),
	img_url_4: z.string().optional(),
	description_1: z.string().optional(),
	description_2: z.string().optional(),
	description_3: z.string().optional(),
	description_4: z.string().optional(),
	sub_description_4: z.array(z.string()).optional(),
	path_site: z.string().url().optional()
})

const stepSchema = z.object({
	title_step: z.string().min(1),
	description_step: z.string().min(1)
})

export const projectCaseSchema = z.object({
	title: z.string().min(1),
	tegs: z.array(z.object({ id: z.number(), label: z.string() })),
	hero_image: z.string().min(1),
	hero_image_description: z.string(),
	step_one: stepSchema,
	step_two: stepSchema,
	step_three: z.array(
		z.object({ id: z.number(), count: z.number(), text: z.string() })
	),
	old_sites_title: z.string(),
	old_sites: z.array(
		z.object({
			id: z.number(),
			img_url: z.string().min(1),
			description: z.string()
		})
	),
	stager_title: z.string(),
	stager_one: stagerSchema,
	stager_two: stagerSchema,
	stager_three: stagerSchema,
	stager_four: stagerSchema,
	stager_five: stagerSchema
})

export const project2CaseSchema = projectCaseSchema.extend({
	stager_six: stagerSchema,
	stager_seven: stagerSchema
})

export const projectCardSchema = z.object({
	id: z.string().min(1),
	name: z.string().min(1),
	description: z.string().min(1),
	bgImage: z.string().min(1),
	imageProject: z.string().min(1),
	href: z.string().min(1),
	external: z.boolean().optional().default(false),
	tags: z.array(z.string())
})

export const stageSchema = z.object({
	id: z.number(),
	number: z.string(),
	content: z.array(
		z.object({
			id: z.number(),
			title: z.string(),
			description: z.string()
		})
	)
})

export const serviceSchema = z.object({
	id: z.number(),
	title: z.string(),
	subTitle: z.string(),
	description: z.string(),
	price: z.string(),
	data: z.string()
})

export type SiteInfo = z.infer<typeof siteInfoSchema>
export type SiteStager = z.infer<typeof stagerSchema>
export type ProjectCase = z.infer<typeof projectCaseSchema>
export type Project2Case = z.infer<typeof project2CaseSchema>
export type ProjectCard = z.infer<typeof projectCardSchema>
export type Stage = z.infer<typeof stageSchema>
export type Service = z.infer<typeof serviceSchema>
