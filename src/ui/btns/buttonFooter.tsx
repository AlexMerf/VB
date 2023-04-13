import React, { FC } from 'react'

interface ButtonProps
	extends React.DetailedHTMLProps<
			React.ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		React.AriaAttributes {}

export const ButtonFooter: FC<ButtonProps> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>
}
