import Layout from 'layout'
import Head from 'next/head'
import React from 'react'

import { HeroimageProject } from '@/components/heroimageProject/heroimageProject'
import { OldSite } from '@/components/oldSite/oldSite'
import { StagesOfCreation } from '@/components/stagesOfCreation/stagesOfCreation'

import data from '../../../data/project_1.json'

export const Project_1 = () => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<HeroimageProject data={data} />
				<OldSite data={data} />
				<StagesOfCreation data={data} />
			</Layout>
		</>
	)
}