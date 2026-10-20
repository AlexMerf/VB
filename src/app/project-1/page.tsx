import cn from 'classnames'
import type { Metadata } from 'next'

import { HeroimageProject } from '@/components/heroimageProject/heroimageProject'
import { NotFoundImage } from '@/components/notFoundImage/NotFoundImage'
import { OldSite } from '@/components/oldSite/oldSite'
import { StageOfCreation } from '@/components/stagesOfCreation/stage/stageOfCreation'

import { project1Case as data } from '@/data/projects'

import styles from './styles.module.scss'

export const metadata: Metadata = {
	title: data.title,
	description:
		'Кейс Intechaus: объединение двух сайтов в один — анализ конкурентов, прототип, дизайн, адаптив и вёрстка.',
	alternates: { canonical: '/project-1' },
	openGraph: { url: '/project-1' }
}

export default function Project1Page() {
	return (
		<>
			<HeroimageProject data={data} />
				<OldSite data={data} widthImg={695} heightImg={405} />
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
												width={695}
												height={384}
												className={styles.image1}
											/>
										</div>
										<div className={styles.wrapperImage2}>
											<NotFoundImage
												src={data.stager_three.img_url_2 || ''}
												alt={data.stager_three.title}
												width={695}
												height={384}
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
												width={695}
												height={883}
												className={styles.image1}
											/>
										</div>
										<div className={cn(styles.wrapperImage2, styles.s)}>
											<NotFoundImage
												src={data.stager_four.img_url_2 || ''}
												alt={data.stager_four.title}
												width={333}
												height={771}
												className={styles.image1}
											/>
										</div>
										<div className={cn(styles.wrapperImage2, styles.d)}>
											<NotFoundImage
												src={data.stager_four.img_url_3 || ''}
												alt={data.stager_four.title}
												width={332}
												height={535}
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
							</div>
						</div>
					</div>
				</section>
		</>
	)
}
