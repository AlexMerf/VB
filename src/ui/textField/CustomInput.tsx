import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomInput = styled(TextField)(() => ({
	'& .MuiFormLabel-root': {
		fontFamily: 'Mulish',
		fontSize: 'clamp(12px, calc(12px + 4 * ((100vw - 320px) / 1600)), 16px)',
		transform:
			'translate(clamp(20px, calc(20px + 30 * ((100vw - 320px) / 1600)), 50px), 16px) scale(1)',

		"&[data-shrink='true']": {
			transform: `translate(clamp(25px, calc(25px + 30 * ((100vw - 320px) / 1600)), 55px), clamp(-9px, calc(-5px - 4 * ((100vw - 320px) / 1600)), -5px)) scale(0.73)`
		},

		'&.Mui-focused': {
			color: 'var(--color-blue)',
			transform: `translate(clamp(25px, calc(25px + 30 * ((100vw - 320px) / 1600)), 55px), clamp(-9px, calc(-5px - 4 * ((100vw - 320px) / 1600)), -5px)) scale(0.73)`
		}
	},

	'& .MuiInputBase-root': {
		height: 'calc(50px + 20 * ((100vw - 320px) / 1600)), 50px), 70px)',
		borderRadius: '63px'
	},

	'& .MuiInputBase-input': {
		padding:
			'14.5px clamp(20px, calc(20px + 30 * ((100vw - 320px) / 1600)), 50px)'
	},

	'& .MuiOutlinedInput-notchedOutline': {
		padding: '0 clamp(20px, calc(20px + 30 * ((100vw - 320px) / 1600)), 50px)'
	}
}))
