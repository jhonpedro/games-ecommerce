import styled from 'styled-components'

import { CardContainer } from '../../components/Card/styles'

export const LandingPageContainer = styled.div`
	width: 100%;
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

export const LandingSort = styled.div`
	display: flex;
	justify-content: space-evenly;

	font-size: 1.5rem;

	span {
		transition: 300ms;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	svg {
		transition: 300ms;
	}

	span.active svg {
		transform: rotate(180deg);
	}
`
