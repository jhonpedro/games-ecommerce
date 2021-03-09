import React from 'react'
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { ContainerHeader, ContainerNavBar } from './styles'

const NavBar: React.FC = function () {
	return (
		<ContainerHeader>
			<ContainerNavBar>
				<div className='logo'>
					<span>Games</span> E-Commerce
				</div>
				<div className='redirects'>
					<Link to='/'>
						<FiHome className='home-icon' />
					</Link>
					<Link to='/cart'>
						<FiShoppingCart className='cart-icon' />
					</Link>
				</div>
			</ContainerNavBar>
		</ContainerHeader>
	)
}

export default NavBar
