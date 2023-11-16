import { FC } from 'react'
import Pizza from '../models/Pizza'
import SinglePizza from './SinglePizza'

interface DisplayPizzasPorps {
	pizzasList: Pizza[]
	updatePizza: (newPizza: Pizza) => void
	deletePizza: (id: number) => void
}

const DisplayPizzas: FC<DisplayPizzasPorps> = ({
	pizzasList,
	updatePizza,
	deletePizza,
}) => {
	return (
		<>
			<div className='container'>
				{pizzasList.map(pizza => {
					return (
						<SinglePizza
							key={pizza.id}
							pizza={pizza}
							updatePizza={updatePizza}
							deletePizza={deletePizza}
						/>
					)
				})}
			</div>
		</>
	)
}

export default DisplayPizzas
