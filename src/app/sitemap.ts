import type { MetadataRoute } from 'next'

import { siteUrl } from '@/data/site'

const lastModified = new Date('2026-10-21')

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${siteUrl}/`,
			lastModified,
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: `${siteUrl}/project-1`,
			lastModified,
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: `${siteUrl}/project-2`,
			lastModified,
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: `${siteUrl}/stages-page`,
			lastModified,
			changeFrequency: 'yearly',
			priority: 0.6
		},
		{
			url: `${siteUrl}/brif`,
			lastModified,
			changeFrequency: 'yearly',
			priority: 0.7
		},
		{
			url: `${siteUrl}/privacy`,
			lastModified,
			changeFrequency: 'yearly',
			priority: 0.1
		}
	]
}
