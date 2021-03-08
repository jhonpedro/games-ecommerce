import React, { ButtonHTMLAttributes } from 'react'

import { ButtonElement } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean
	secondary?: boolean
}

const Button: React.FC<ButtonProps> = function ({
	children,
	primary,
	secondary,
	...rest
}) {
	return (
		<ButtonElement
			primary={primary ? primary : false}
			secondary={secondary ? secondary : false}
			{...rest}
		>
			{children}
		</ButtonElement>
	)
}

export default Button
