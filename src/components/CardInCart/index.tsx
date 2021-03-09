import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

import getImageFromNameGiven from '../../utils/Helpers/getImageFromNameGiven'

import { CardInCartContainer, Contents } from './styles'

interface CardInCartProps {
	name: string
	price: number
	image: string
	index: number
	increaseTotal: (plus: number) => any
	decreaseTotal: (minus: number) => any
	removeItem: (index: number) => any
}

const Card: React.FC<CardInCartProps> = function ({
	name,
	price,
	image,
	index,
	increaseTotal,
	decreaseTotal,
	removeItem,
}) {
	const Image = getImageFromNameGiven(image)
	const [quantity, setQuantity] = useState(1)
	const [product, setProduct] = useState({
		name,
		price,
		image,
		total: getTotal(),
		quantity: quantity,
	})

	useEffect(() => {
		if (product.total > quantity * price) {
			decreaseTotal(price)
		} else if (quantity !== 1) {
			increaseTotal(price)
		}

		setProduct({
			...product,
			total: getTotal(),
			quantity,
		})
		//eslint-disable-next-line
	}, [quantity])

	function getTotal(): number {
		return price * quantity
	}

	function handleIncreaseQuantity() {
		setQuantity(quantity + 1)
	}
	function handleDecreaseQuantity() {
		if (quantity === 1) {
			return
		}
		setQuantity(quantity - 1)
	}

	return (
		<CardInCartContainer>
			<span className='closeButton' onClick={() => removeItem(index)}>
				<FiX />
			</span>
			<img src={Image} alt={`Foto do ${name}`} />
			<Contents>
				<div className='box box-1'>
					<strong>{name}</strong>
				</div>
				<div className='box box-2'>
					<strong>Quantidade</strong>
					<div className='quantity'>
						<span onClick={handleDecreaseQuantity}> - </span>
						<strong> {quantity} </strong>
						<span onClick={handleIncreaseQuantity}> + </span>
					</div>

					<span className='price'>
						Preço unitário: R$ <strong>{price}</strong>
					</span>
				</div>
				<div className='box box-3'>
					<strong>Total</strong>
					<span>{product.total.toFixed(2)}</span>
				</div>
			</Contents>
		</CardInCartContainer>
	)
}

export default Card
