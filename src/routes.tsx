import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cart from './pages/Cart/Index'
import Landing from './pages/Landing'

const Routes: React.FC = function () {
	return (
		<Switch>
			<Route path='/' exact>
				<Landing />
			</Route>
			<Route path='/cart'>
				<Cart />
			</Route>
		</Switch>
	)
}

export default Routes
