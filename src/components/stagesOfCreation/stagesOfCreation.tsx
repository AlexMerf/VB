import cn from 'classnames'
import Image from 'next/image'
import React from 'react'

import { IProjectSet } from '@/types/types'

import { StageOfCreation } from './stage/stageOfCreation'
import styles from './styles.module.scss'

export const StagesOfCreation = ({ data }: { data: IProjectSet }) => {
	return (
		<section>
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
								<Image
									src={data.stager_one.img_url || ''}
									alt={data.stager_one.title}
									width={1419}
									height={592}
									quality={100}
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
								<Image
									src={data.stager_two.img_url || ''}
									alt={data.stager_two.title}
									width={1419}
									height={592}
									quality={100}
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
									<Image
										src={data.stager_three.img_url_1 || ''}
										alt={data.stager_three.title}
										width={695}
										height={384}
										quality={100}
										className={styles.image1}
									/>
								</div>
								<div className={styles.wrapperImage2}>
									<Image
										src={data.stager_three.img_url_2 || ''}
										alt={data.stager_three.title}
										width={695}
										height={384}
										quality={100}
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
									<Image
										src={data.stager_four.img_url_1 || ''}
										alt={data.stager_four.title}
										width={695}
										height={384}
										quality={100}
										className={styles.image1}
									/>
								</div>
								<div className={cn(styles.wrapperImage2, styles.s)}>
									<Image
										src={data.stager_four.img_url_2 || ''}
										alt={data.stager_four.title}
										width={695}
										height={384}
										quality={100}
										className={styles.image1}
									/>
								</div>
								<div className={cn(styles.wrapperImage2, styles.d)}>
									<Image
										src={data.stager_four.img_url_3 || ''}
										alt={data.stager_four.title}
										width={695}
										height={384}
										quality={100}
										className={styles.image1}
									/>
								</div>
								<div className={cn(styles.wrapperImage2, styles.f)}>
									<Image
										src={data.stager_four.img_url_4 || ''}
										alt={data.stager_four.title}
										width={695}
										height={384}
										quality={100}
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
									<Image
										src={data.stager_five.img_url_1 || ''}
										alt={data.stager_five.title}
										width={695}
										height={384}
										quality={100}
										className={styles.image1}
									/>
								</div>
								<div className={styles.wrapperImage2}>
									<Image
										src={data.stager_five.img_url_2 || ''}
										alt={data.stager_five.title}
										width={695}
										height={384}
										quality={100}
										className={styles.image1}
									/>
								</div>
								<div className={styles.wrapperImage2}>
									<Image
										src={data.stager_five.img_url_3 || ''}
										alt={data.stager_five.title}
										width={695}
										height={384}
										quality={100}
										className={styles.image1}
									/>
								</div>
								<div className={styles.wrapperImage2}>
									<Image
										src={data.stager_five.img_url_4 || ''}
										alt={data.stager_five.title}
										width={695}
										height={384}
										quality={100}
										className={styles.image1}
									/>
								</div>
							</div>
						</StageOfCreation>
					</div>
				</div>
			</div>
		</section>
	)
}
