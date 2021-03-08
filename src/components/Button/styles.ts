import styled, { css } from 'styled-components'

import { ButtonProps } from './index'

export const ButtonElement = styled.button<ButtonProps>`
	width: auto;
	padding: 0.6rem 1rem;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	font-size: 1.4rem;
	color: var(--color-white);
	border: 2px solid transparent;

	transition: 300ms;

	&:hover {
		background-color: var(--color-primary-darker);
		border: 2px solid var(--color-white);
	}

	${(props) => {
		if (props.primary) {
			return css`
				background-color: var(--color-primary);
			`
		}
		if (props.secondary) {
			return css`
				background-color: var(--color-primary-desaturate);
			`
		}
	}}
`
