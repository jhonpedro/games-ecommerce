import styled from 'styled-components'
import { CardInCartContainer } from '../../components/CardInCart/styles'

export const CartPageContainer = styled.div`
	width: 100%;
`

export const CartContent = styled.main`
	width: 85%;
	margin: 0 auto;
	padding-bottom: 2rem;

	h2 {
		font-size: 2rem;
		padding: 1rem 0;
	}

	.empty {
		font-size: 3rem;
		color: gray;
		filter: opacity(90%);
		text-align: center;
	}

	.total {
		display: flex;
		flex-direction: column;
		align-items: center;

		background-color: var(--color-primary-darker);
		color: var(--color-white);
		padding: 1rem;
		margin-top: 3rem;
		border-radius: 2rem;

		font-size: 1.8rem;
		strong:before {
			content: 'R$ ';
		}

		span:last-child {
			font-size: 2rem;
		}
	}

	${CardInCartContainer} {
		margin-top: 1rem;
	}
`
