import React from 'react'

import { ButtonElement } from './styles'

export interface ButtonProps {
	primary?: boolean
	secondary?: boolean
}

const Button: React.FC<ButtonProps> = function ({
	children,
	primary,
	secondary,
}) {
	return (
		<ButtonElement
			primary={primary ? primary : false}
			secondary={secondary ? secondary : false}
		>
			{children}
		</ButtonElement>
	)
}

export default Button
