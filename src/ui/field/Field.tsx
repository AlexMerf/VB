import cn from 'classnames'
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type CommonProps = {
	label: string
	name: string
	helperText?: string
	error?: string
	multiline?: boolean
	rows?: number
	className?: string
	required?: boolean
}

type InputProps = CommonProps & { multiline?: false } & InputHTMLAttributes<HTMLInputElement>
type TextareaProps = CommonProps & {
	multiline: true
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export type FieldProps = InputProps | TextareaProps

export const Field = (props: FieldProps) => {
	const { label, name, helperText, error, multiline, className, rows, required, ...rest } = props
	const id = `field-${name}`
	const describedBy = error ? `${id}-error` : helperText ? `${id}-hint` : undefined

	const controlClassName = cn(
		styles.control,
		multiline ? styles.textarea : styles.input,
		error && styles.invalid,
		className
	)
	const labelClassName = cn(
		styles.label,
		multiline ? styles.textareaLabel : styles.inputLabel,
		error && styles.labelInvalid
	)

	return (
		<div className={styles.field}>
			{multiline ? (
				<textarea
					id={id}
					name={name}
					placeholder=" "
					rows={rows}
					required={required}
					aria-invalid={Boolean(error)}
					aria-describedby={describedBy}
					className={controlClassName}
					{...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
				/>
			) : (
				<input
					id={id}
					name={name}
					placeholder=" "
					required={required}
					aria-invalid={Boolean(error)}
					aria-describedby={describedBy}
					className={controlClassName}
					{...(rest as InputHTMLAttributes<HTMLInputElement>)}
				/>
			)}

			{label ? (
				<label htmlFor={id} className={labelClassName}>
					{label}
					{required ? ' *' : ''}
				</label>
			) : null}

			{error ? (
				<span id={`${id}-error`} className={styles.error}>
					{error}
				</span>
			) : helperText ? (
				<span id={`${id}-hint`} className={styles.helper}>
					{helperText}
				</span>
			) : null}
		</div>
	)
}
