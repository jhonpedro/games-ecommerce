import React from 'react'

import { LandingPageContainer, LandingHeader } from './styles'
import NavBar from '../../components/NavBar'

const Landing: React.FC = function () {
	return (
		<LandingPageContainer>
			<LandingHeader>
				<NavBar />
			</LandingHeader>
		</LandingPageContainer>
	)
}

export default Landing
