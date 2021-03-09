import React from 'react'
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'
import { useHistory } from 'react-router'

import getImageFromNameGiven from '../../utils/Helpers/getImageFromNameGiven'
import Button from '../Button'

import { CardContainer, Contents } from './styles'

interface CardProps {
	name: string
	price: number
	score: number
	image: string
}

interface ProductInCart {
	name: string
	price: number
	image: string
}

const CardInCart: React.FC<CardProps> = function ({
	name,
	price,
	score,
	image,
}) {
	const Image = getImageFromNameGiven(image)
	const { push } = useHistory()

	function handleBuy() {
		handleAddToCart()
		push('/cart')
	}

	function handleAddToCart() {
		const localStorageCartItems = localStorage.getItem('cartItems') || '[]'
		const cartItems: Array<ProductInCart> = JSON.parse(localStorageCartItems)

		const alreadyHaveTheProduct = cartItems.some((item) => item.name === name)

		if (alreadyHaveTheProduct) {
			return
		}

		cartItems.push({ name, price, image })
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}

	return (
		<CardContainer>
			<img src={Image} alt={`Foto do ${name}`} />
			<Contents>
				<strong>{name}</strong>
				<div className='informations'>
					<span className='price'>
						R$ <strong>{price}</strong>
					</span>
					<span className='score'>
						Popularidade: <strong>{score}</strong>
					</span>
				</div>
				<div className='buttons'>
					<Button secondary onClick={handleBuy}>
						Comprar <FiShoppingBag />{' '}
					</Button>
					<Button secondary onClick={handleAddToCart}>
						Adicionar ao carrinho <FiShoppingCart />{' '}
					</Button>
				</div>
			</Contents>
		</CardContainer>
	)
}

export default CardInCart
