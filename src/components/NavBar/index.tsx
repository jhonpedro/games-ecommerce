import React from 'react'
import { FiHome, FiShoppingCart } from 'react-icons/fi'

import { ContainerNavBar } from './styles'

const NavBar: React.FC = function () {
	return (
		<ContainerNavBar>
			<div className='logo'>
				<span>Games</span> E-Commerce
			</div>
			<div className='redirects'>
				<FiHome className='home-icon' />
				<FiShoppingCart className='cart-icon' />
			</div>
		</ContainerNavBar>
	)
}

export default NavBar
