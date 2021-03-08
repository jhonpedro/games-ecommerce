import styled from 'styled-components'

import { CardContainer } from '../../components/Card/styles'

export const LandingPageContainer = styled.div`
	width: 100%;
`

export const LandingHeader = styled.header`
	width: 100%;
	height: 5.5rem;
	background-color: var(--color-primary);

	display: flex;
	align-items: center;
`

export const LandingContent = styled.div`
	padding-bottom: 2rem;
	width: 85%;

	margin: 0 auto;

	h2 {
		font-size: 2rem;
		padding: 1rem 0;
	}

	.products {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}

	${CardContainer} {
		margin-top: 1rem;
	}
`
