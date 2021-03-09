import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './assets/styles/global'
import Routes from './routes'

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes />
			<GlobalStyle />
		</BrowserRouter>
	)
}

export default App
