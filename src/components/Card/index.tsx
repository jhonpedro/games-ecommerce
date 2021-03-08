import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

import getImageFromNameGiven from '../../utils/Helpers/getImageFromNameGiven'
import Button from '../Button'

import { CardContainer, Contents } from './styles'

interface CardProps {
	name: string
	price: number
	score: number
	image: string
}

const Card: React.FC<CardProps> = function ({ name, price, score, image }) {
	const Image = getImageFromNameGiven(image)

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
						Pontuação: <strong>{score}</strong>
					</span>
				</div>
				<div className='buttons'>
					<Button secondary>Comprar</Button>
					<Button secondary>
						Adicionar ao carrinho <FiShoppingCart />{' '}
					</Button>
				</div>
			</Contents>
		</CardContainer>
	)
}

export default Card
