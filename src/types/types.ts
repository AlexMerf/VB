export interface INav {
	id: number
	label: string
	path: string
}

export interface IProject {
	id: number
	name: string
	description: string
	bg_image: string
	image_project: string
	path: string
	tegs: ITeg[]
}

export interface ITeg {
	id: number
	label: string
}

export interface IProjectSet {
	title: string
	tegs: IProjectTegs[]
	hero_image: string
	hero_image_description: string
	step_one: IProjectStep
	step_two: IProjectStep
	step_three: IProjectStepThree[]
	old_sites_title: string
	old_sites: IProjectOldSite[]
	stager_title: string
	stager_one: IStager
	stager_two: IStager
	stager_three: IStager
	stager_four: IStager
	stager_five: IStager
}

export interface IProjectTegs {
	id: number
	label: string
}

export interface IProjectStep {
	title_step: string
	description_step: string
}

export interface IProjectStepThree {
	id: number
	count: number
	text: string
}

export interface IProjectOldSite {
	id: number
	img_url: string
	description: string
}

export interface IStager {
	title: string
	description: string
	img_url?: string
	img_url_1?: string
	img_url_2?: string
	img_url_3?: string
	img_url_4?: string
}
