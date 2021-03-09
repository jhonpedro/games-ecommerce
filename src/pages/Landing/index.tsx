import React, { useState } from 'react'
import ProductsJSON from '../../services/products.json'
import { FiChevronUp } from 'react-icons/fi'

import { LandingPageContainer, LandingContent, LandingSort } from './styles'
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
	const [products, setProducts] = useState<Array<ProductProps>>(ProductsJSON)

	const [sortByPriceOrder, setSortByPriceOrder] = useState(0)
	const [sortByPopularityOrder, setSortByPopularityOrder] = useState(0)
	const [sortByNameOrder, setSortByNameOrder] = useState(0)

	function sortByPrice() {
		setSortByPriceOrder(sortByPriceOrder ? 0 : 1)

		if (sortByPriceOrder) {
			products.sort((a, b) => a.price - b.price)
		} else {
			products.sort((a, b) => b.price - a.price)
		}
	}

	function sortByPopularity() {
		setSortByPopularityOrder(sortByPopularityOrder ? 0 : 1)

		if (sortByPopularityOrder) {
			products.sort((a, b) => a.score - b.score)
		} else {
			products.sort((a, b) => b.score - a.score)
		}
	}

	function sortByName() {
		setSortByNameOrder(sortByNameOrder ? 0 : 1)

		if (sortByNameOrder) {
			products.sort((a, b) => {
				if (a.name > b.name) {
					return -1
				}
				if (a.name < b.name) {
					return 1
				}
				return 0
			})
		} else {
			products.sort((a, b) => {
				if (a.name < b.name) {
					return -1
				}
				if (a.name > b.name) {
					return 1
				}
				return 0
			})
		}
	}

	return (
		<LandingPageContainer>
			<NavBar />
			<LandingContent>
				<h2>Produtos</h2>
				<LandingSort>
					<span
						onClick={sortByPrice}
						className={sortByPriceOrder ? 'active' : ''}
					>
						{' '}
						<FiChevronUp /> Preço
					</span>
					<span
						onClick={sortByPopularity}
						className={sortByPopularityOrder ? 'active' : ''}
					>
						{' '}
						<FiChevronUp /> Popularidade
					</span>
					<span
						onClick={sortByName}
						className={sortByNameOrder ? 'active' : ''}
					>
						{' '}
						<FiChevronUp /> Nome
					</span>
				</LandingSort>
				<main className='products'>
					{products.map((product) => {
						return (
							<Card
								key={product.id}
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
