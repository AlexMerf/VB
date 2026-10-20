import styles from './styles.module.scss'

export type RadioOption = {
	value: string
	label: string
}

type RadioGroupProps = {
	name: string
	options: RadioOption[]
	defaultValue?: string
	legend?: string
}

export const RadioGroup = ({ name, options, defaultValue, legend }: RadioGroupProps) => {
	return (
		<fieldset className={styles.group}>
			{legend && <legend className={styles.legend}>{legend}</legend>}
			{options.map(option => (
				<label key={option.value} className={styles.radio}>
					<input
						className={styles.input}
						type="radio"
						name={name}
						value={option.value}
						defaultChecked={defaultValue === option.value}
					/>
					<span className={styles.control} aria-hidden="true" />
					<span className={styles.label}>{option.label}</span>
				</label>
			))}
		</fieldset>
	)
}
