import React, { useEffect, useState } from 'react'
import CardInCart from '../../components/CardInCart'
import NavBar from '../../components/NavBar'
import { GiGhost } from 'react-icons/gi'

import { CartPageContainer, CartContent } from './styles'

interface ProductsInCart {
	name: string
	image: string
	price: number
}

const Cart: React.FC = function () {
	const [productsInCart, setProductsInCart] = useState<Array<ProductsInCart>>(
		() => {
			const cartItems = localStorage.getItem('cartItems')
			if (!cartItems) {
				return [] as ProductsInCart[]
			}

			return JSON.parse(cartItems)
		}
	)

	const [total, setTotal] = useState(() => {
		if (productsInCart.length === 0) {
			return 0
		}

		let totalInCart = 0

		for (let i = 0; i < productsInCart.length; i++) {
			totalInCart += productsInCart[i].price
		}

		return totalInCart
	})

	const [shipping, setShipping] = useState(() => {
		if (total > 250) {
			return 0
		}

		return productsInCart.length * 10
	})

	useEffect(() => {
		if (total > 250) {
			setShipping(0)
		} else {
			setShipping(productsInCart.length * 10)
		}

		if (productsInCart.length === 0) {
			setShipping(0)
			setTotal(0)
		}
	}, [total, productsInCart])

	function removeItemFromCart(index: number) {
		const newItems = productsInCart.filter((item, indexInArr) => {
			if (index !== indexInArr) {
				return item
			}
		})

		localStorage.setItem('cartItems', JSON.stringify(newItems))

		let totalInCart = 0

		for (let i = 0; i < newItems.length; i++) {
			totalInCart += newItems[i].price
		}

		setTotal(totalInCart)

		setProductsInCart(newItems)
	}

	function increaseTotal(plus: number) {
		setTotal(total + plus)
	}

	function decreaseTotal(minus: number) {
		setTotal(total - minus)
	}

	function getTotal() {
		if (total > 250) {
			return total
		}

		return total + shipping
	}

	return (
		<CartPageContainer>
			<NavBar />
			<CartContent>
				{productsInCart.length === 0 ? (
					<h2 className='empty'>
						Está vazio por aqui <GiGhost />
					</h2>
				) : (
					<h2>Carrinho</h2>
				)}
				<div className='items'>
					{productsInCart.map((product, index) => {
						return (
							<CardInCart
								key={index}
								name={product.name}
								image={product.image}
								price={product.price}
								increaseTotal={increaseTotal}
								decreaseTotal={decreaseTotal}
								removeItem={removeItemFromCart}
								index={index}
							/>
						)
					})}
				</div>
				<div className='total'>
					<span>
						Frete: <strong>{shipping}</strong>
					</span>
					<span>
						Sub Total: <strong>{total.toFixed(2)}</strong>
					</span>
					<span>
						Total: <strong>{Number(getTotal()).toFixed(2)}</strong>
					</span>
				</div>
			</CartContent>
		</CartPageContainer>
	)
}

export default Cart
