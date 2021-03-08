import styled from 'styled-components'

export const CardContainer = styled.div`
	width: 20rem;
	border: 2px solid var(--color-primary);
	color: var(--color-primary-darker);
	padding-bottom: 0.5rem;

	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	overflow: hidden;
	background-color: var(--color-primary);

	transition: 300ms;

	:hover {
		margin-top: -0.2rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
	}
	img {
		background-color: white;
		padding: 0.5rem 0;
		width: 100%;
		border-radius: 0.5rem;
	}

	> strong {
		text-align: center;
		font-size: 2rem;
	}

	.informations,
	.buttons {
		padding: 0 0.5rem;
	}

	.informations {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;

		strong {
			margin-left: 0.3rem;
		}
	}

	.price,
	.score {
		display: flex;
		align-items: center;
	}

	.price {
		font-size: 1.5rem;
		strong {
			font-size: 2rem;
		}
	}

	.score strong {
		font-size: 2rem;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		align-items: center;

		button:first-child {
			margin-bottom: 0.2rem;
		}
	}

	@media (max-width: 635px) {
		width: 18rem;
	}
`
