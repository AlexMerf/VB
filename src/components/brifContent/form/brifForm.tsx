'use client'

import { Alert, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IShippingFields } from '@/types/types'

import { CustomInput } from 'ui/textField/CustomInput'

import styles from './styles.module.scss'

export const BrifForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IShippingFields>({
		mode: 'onChange'
	})

	const TOKEN = '6053914667:AAGnA2FRspjvU3hj1ZQZv4otKbgDsYlieaQ'
	const CHAT_ID = '-1001848685789'
	const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

	const onSubmit: SubmitHandler<IShippingFields> = data => {
		let message = `<b>Заявка с сайта</b>\n`
		message += `<b>Имя:</b> ${data.name} \n`
		message += `<b>Телефон:</b> ${data.phone} \n`
		message += `<b>Телеграм:</b> ${data.nickname} \n`
		message += `<b>Какой сайт нужен:</b> ${data.site} \n`
		message += `<b>Кратко о бизнесе:</b> ${data.msgCompany} \n`
		message += `<b>Ссылка на сайт:</b> ${data.link} \n`
		message += `<b>Цель сайта:</b> ${data.purpose} \n`
		message += `<b>Какие страницы нужны на сайте:</b> ${data.pages} \n`
		message += `<b>Бюджет:</b> ${data.price} \n`
		message += `<b>Сообщения:</b> ${data.msg}`

		axios
			.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: message
			})
			.then(res => {
				reset()
			})
			.catch(err => {
				console.warn(err)
			})
			.finally(() => {
				console.log('Конец')
			})
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Ваше имя*</span>
				<CustomInput
					required
					fullWidth
					label="Как к вам обращаться"
					{...register('name', {
						required: 'Обязательное поле',
						minLength: {
							value: 2,
							message: 'Не меньше 2 символов'
						}
					})}
				/>
				{errors?.name && <Alert severity="error">{errors?.name.message}</Alert>}
			</div>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Ваши контакты*</span>
				<CustomInput
					required
					fullWidth
					label="Напишите номер телефона"
					helperText="Например 8-000-000-00-00"
					{...register('phone', {
						required: 'Обязательное поле',
						pattern: {
							value: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
							message: 'Введите валидный телефон'
						}
					})}
				/>
				{errors?.phone && (
					<Alert severity="error">{errors?.phone.message}</Alert>
				)}
				<CustomInput
					fullWidth
					label="Напишите ник в Telegram"
					helperText="Например @НикТелеграмм"
					{...register('nickname')}
				/>
			</div>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Какой сайт вам нужен?</span>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="Одностраничный"
						control={
							<Radio
								inputProps={{
									'aria-label': 'Одностраничный'
								}}
							/>
						}
						label="Одностраничный"
						{...register('site')}
						sx={{
							'&.MuiFormControlLabel-root': {
								'& .MuiFormControlLabel-label': {
									fontFamily: 'var(--font-mulish)',
									fontSize:
										'clamp(12px, calc(12px + 4 * ((100vw - 320px) / 1600)), 16px)',
									fontWeight: '500',
									color: 'var(--color-gray)'
								}
							}
						}}
					/>
					<FormControlLabel
						value="Многостраничный"
						control={
							<Radio
								inputProps={{
									'aria-label': 'Многостраничный'
								}}
							/>
						}
						{...register('site')}
						label="Многостраничный"
						sx={{
							'&.MuiFormControlLabel-root': {
								'& .MuiFormControlLabel-label': {
									fontFamily: 'var(--font-mulish)',
									fontSize:
										'clamp(12px, calc(12px + 4 * ((100vw - 320px) / 1600)), 16px)',
									fontWeight: '500',
									color: 'var(--color-gray)'
								}
							}
						}}
					/>
					<FormControlLabel
						value="Дизайн макета без верстки"
						control={
							<Radio
								inputProps={{
									'aria-label': 'Дизайн макета без верстки'
								}}
							/>
						}
						{...register('site')}
						label="Дизайн макета без верстки"
						sx={{
							'&.MuiFormControlLabel-root': {
								'& .MuiFormControlLabel-label': {
									fontFamily: 'var(--font-mulish)',
									fontSize:
										'clamp(12px, calc(12px + 4 * ((100vw - 320px) / 1600)), 16px)',
									fontWeight: '500',
									color: 'var(--color-gray)'
								}
							}
						}}
					/>
				</RadioGroup>
			</div>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>
					Расскажите кратко о вашем бизнесе, для которого нужен сайт
				</span>
				<CustomInput
					fullWidth
					label="Наша компания занимается..."
					multiline
					rows={5}
					{...register('msgCompany')}
					sx={{
						'& .MuiInputBase-root': {
							borderRadius:
								'clamp(20px, calc(20px + 10 * ((100vw - 320px) / 1600)), 30px)'
						},

						'& .MuiInputBase-inputMultiline': {
							padding:
								'14.5px clamp(0px, calc(0px + 50 * ((100vw - 320px) / 1600)), 50px)'
						}
					}}
				/>
			</div>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Ссылка на старый сайт</span>
				<CustomInput fullWidth label="При наличии" {...register('link')} />
			</div>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Какая цель сайта?</span>
				<CustomInput
					fullWidth
					label="Например, «Автоматизировать все процессы»"
					{...register('purpose')}
				/>
			</div>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Какие страницы нужны на сайте?</span>
				<CustomInput
					fullWidth
					label="Например, О компании, Наши работы, Отзывы"
					{...register('pages')}
				/>
			</div>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Комфортный бюджет</span>
				<CustomInput fullWidth {...register('price')} />
			</div>
			<div className={styles.formGroup}>
				<span className={styles.formLabel}>Комментарии по проекту</span>
				<CustomInput
					fullWidth
					label="Любая дополнительная важная информация: вопросы, пожелания по дизайну, сроки т т.д."
					multiline
					rows={5}
					{...register('msg')}
					sx={{
						'& .MuiInputBase-root': {
							borderRadius: '30px'
						}
					}}
				/>
			</div>
			<button type="submit" className={styles.btn}>
				Отправить
			</button>
			<div className={styles.politic}>
				<span>
					Нажимая на кнопку «Отправить», вы даете согласие на обработку
					персональных данных согласно
				</span>
				<Link href="/">политики конфиденциальности</Link>
			</div>
		</form>
	)
}
