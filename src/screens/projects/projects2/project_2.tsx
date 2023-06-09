import cn from 'classnames'
import Layout from 'layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import { HeroimageProject } from '@/components/heroimageProject/heroimageProject'
import { NotFoundImage } from '@/components/notFoundImage/NotFoundImage'
import { OldSite } from '@/components/oldSite/oldSite'
import { StageOfCreation } from '@/components/stagesOfCreation/stage/stageOfCreation'

import data from '../../../data/project_2.json'

import styles from './styles.module.scss'

export const Project_2 = () => {
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
				<OldSite data={data} widthImg={1420} heightImg={570} />
				<section className={styles.stages}>
					<div className="container">
						<div className={styles.content}>
							<h2 className={styles.title}>{data.stager_title}</h2>
							<div className={styles.items}>
								<StageOfCreation
									title={data.stager_one.title}
									subTitle="1 этап"
									titleDescription={data.stager_one.description}
								>
									<div className={styles.wrapperImage1}>
										<NotFoundImage
											src={data.stager_one.img_url || ''}
											alt={data.stager_one.title}
											width={1419}
											height={592}
											className={styles.image1}
										/>
									</div>
								</StageOfCreation>
								<StageOfCreation
									title={data.stager_two.title}
									subTitle="2 этап"
									titleDescription={data.stager_two.description}
								>
									<div className={styles.wrapperImage2}>
										<NotFoundImage
											src={data.stager_two.img_url || ''}
											alt={data.stager_two.title}
											width={1420}
											height={600}
											className={styles.image1}
										/>
									</div>
								</StageOfCreation>
								<StageOfCreation
									title={data.stager_three.title}
									subTitle="3 этап"
									titleDescription={data.stager_three.description}
								>
									<div className={styles.wrapperImages3}>
										<div className={styles.wrapperImage2}>
											<NotFoundImage
												src={data.stager_three.img_url_1 || ''}
												alt={data.stager_three.title}
												width={1420}
												height={787}
												className={styles.image1}
											/>
										</div>
									</div>
								</StageOfCreation>
								<StageOfCreation
									title={data.stager_four.title}
									subTitle="4 этап"
									titleDescription={data.stager_four.description}
								>
									<div className={styles.wrapperImages4}>
										<div className={cn(styles.wrapperImage2, styles.a)}>
											<NotFoundImage
												src={data.stager_four.img_url_1 || ''}
												alt={data.stager_four.title}
												width={694}
												height={895}
												className={styles.image1}
											/>
										</div>
										<div className={cn(styles.wrapperImage2, styles.s)}>
											<NotFoundImage
												src={data.stager_four.img_url_2 || ''}
												alt={data.stager_four.title}
												width={333}
												height={785}
												className={styles.image1}
											/>
										</div>
										<div className={cn(styles.wrapperImage2, styles.d)}>
											<NotFoundImage
												src={data.stager_four.img_url_3 || ''}
												alt={data.stager_four.title}
												width={332}
												height={721}
												className={styles.image1}
											/>
										</div>
										<div className={cn(styles.wrapperImage2, styles.f)}>
											<NotFoundImage
												src={data.stager_four.img_url_4 || ''}
												alt={data.stager_four.title}
												width={1420}
												height={1315}
												className={styles.image1}
											/>
										</div>
									</div>
								</StageOfCreation>
								<StageOfCreation
									title={data.stager_five.title}
									subTitle="5 этап"
									titleDescription={data.stager_five.description}
								>
									<div className={styles.wrapperImages5}>
										<div className={styles.wrapperImage2}>
											<NotFoundImage
												src={data.stager_five.img_url_1 || ''}
												alt={data.stager_five.title}
												width={330}
												height={590}
												className={styles.image1}
											/>
										</div>
										<div className={styles.wrapperImage2}>
											<NotFoundImage
												src={data.stager_five.img_url_2 || ''}
												alt={data.stager_five.title}
												width={332}
												height={590}
												className={styles.image1}
											/>
										</div>
										<div className={styles.wrapperImage2}>
											<NotFoundImage
												src={data.stager_five.img_url_3 || ''}
												alt={data.stager_five.title}
												width={333}
												height={590}
												className={styles.image1}
											/>
										</div>
										<div className={styles.wrapperImage2}>
											<NotFoundImage
												src={data.stager_five.img_url_4 || ''}
												alt={data.stager_five.title}
												width={332}
												height={590}
												className={styles.image1}
											/>
										</div>
									</div>
								</StageOfCreation>
								<StageOfCreation
									title={data.stager_six.title}
									subTitle="6 этап"
									titleDescription={data.stager_six.description}
								>
									<div className={styles.wrapperImages6}>
										<div className={styles.wrapperItem}>
											<div className={styles.wrapperImage2}>
												<NotFoundImage
													src={data.stager_six.img_url_1 || ''}
													alt={data.stager_six.title}
													width={695}
													height={343}
													className={styles.image1}
												/>
											</div>
											<p className={styles.wrapperImages6Description}>
												{data.stager_six.description_1}
											</p>
										</div>
										<div className={styles.wrapperItem}>
											<div className={styles.wrapperImage2}>
												<NotFoundImage
													src={data.stager_six.img_url_2 || ''}
													alt={data.stager_six.title}
													width={695}
													height={343}
													className={styles.image1}
												/>
											</div>
											<p className={styles.wrapperImages6Description}>
												{data.stager_six.description_2}
											</p>
										</div>
										<div className={styles.wrapperItem}>
											<div className={styles.wrapperImage2}>
												<NotFoundImage
													src={data.stager_six.img_url_3 || ''}
													alt={data.stager_six.title}
													width={695}
													height={343}
													className={styles.image1}
												/>
											</div>
											<p className={styles.wrapperImages6Description}>
												{data.stager_six.description_3}
											</p>
										</div>
										<div className={styles.wrapperItem}>
											<div className={styles.wrapperImage2}>
												<NotFoundImage
													src={data.stager_six.img_url_4 || ''}
													alt={data.stager_six.title}
													width={695}
													height={343}
													className={styles.image1}
												/>
											</div>
											<div>
												<p className={styles.wrapperImages6Description}>
													{data.stager_six.description_4}
												</p>
												<ul>
													{data.stager_six.sub_description_4.map(
														(item, index) => (
															<li key={index}>{item}</li>
														)
													)}
												</ul>
											</div>
										</div>
									</div>
								</StageOfCreation>
								<StageOfCreation
									title={data.stager_seven.title}
									subTitle="7 этап"
									titleDescription={data.stager_seven.description}
									flexColumnTitle={true}
									felxDirection={true}
								>
									<div className={styles.wrapperImages7}>
										<a
											href={data.stager_seven.path_site}
											className={styles.btn}
										>
											перейти на сайт
										</a>
									</div>
								</StageOfCreation>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}
