import styled from 'styled-components'

export const CardInCartContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border: 2px solid var(--color-primary);
	border-radius: 2rem;
	overflow: hidden;

	background-color: var(--color-primary);

	display: flex;

	.closeButton {
		position: absolute;
		padding: 1rem;
		width: 5rem;
		right: -2rem;
		background-color: var(--color-primary-darker);
		color: white;
		font-size: 1.5rem;
		border-radius: 2rem;
		display: flex;
		align-items: flex-end;

		z-index: 10;
	}

	img {
		padding: 0.5rem 0;
		background-color: white;
		height: 100%;
		border-radius: 2rem;
	}
`

export const Contents = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;

	.box {
		text-align: center;
		width: 100%;
	}

	.box-1 {
		display: flex;
		justify-content: center;
		flex-direction: column;

		> strong {
			font-size: 2rem;
		}

		.informations {
			font-size: 1.4rem;
		}
	}

	.box-2 {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		> strong {
			font-size: 2rem;
		}

		.quantity {
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			strong {
				font-size: 1.5rem;
			}

			span {
				padding: 1rem;
				width: 3.5rem;
				height: 3.5rem;
				cursor: pointer;

				border-radius: 100%;
				background-color: var(--color-primary-darker);
				color: white;
			}
		}
		.price {
			font-size: 1.4rem;
		}
	}

	.box-3 {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;

		strong {
			width: 100%;
			font-size: 2rem;
			position: absolute;
			top: 0;
		}

		span {
			font-size: 2rem;
		}

		span:before {
			content: 'R$ ';
			font-size: 1.4rem;
		}
	}
`
