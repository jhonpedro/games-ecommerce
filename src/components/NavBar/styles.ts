import styled from 'styled-components'

export const ContainerNavBar = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	color: var(--color-primary-darker);

	.logo {
		font-weight: bold;
		font-size: 1.2rem;

		span {
			font-size: 2.5rem;
		}
	}

	.redirects {
		font-size: 2.5rem;

		svg {
			cursor: pointer;
		}

		.home-icon {
			margin-right: 2rem;
		}
	}
`
