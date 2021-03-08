import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'

const Routes: React.FC = function () {
	return (
		<Switch>
			<Route path='/' children={Landing} />
		</Switch>
	)
}

export default Routes
