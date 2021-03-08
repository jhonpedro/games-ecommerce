import React from 'react'
import ProductsJSON from '../../services/products.json'

import { LandingPageContainer, LandingHeader, LandingContent } from './styles'
import NavBar from '../../components/NavBar'
import Card from '../../components/Card'

interface ProductProps {
	id: number
	name: string
	price: number
	score: number
	image: string
}

const Landing: React.FC = function () {
	const products: Array<ProductProps> = ProductsJSON

	return (
		<LandingPageContainer>
			<LandingHeader>
				<NavBar />
			</LandingHeader>
			<LandingContent>
				<h2>Produtos</h2>
				<main className='products'>
					{products.map((product) => {
						return (
							<Card
								name={product.name}
								price={product.price}
								score={product.score}
								image={product.image}
							/>
						)
					})}
				</main>
			</LandingContent>
		</LandingPageContainer>
	)
}

export default Landing
