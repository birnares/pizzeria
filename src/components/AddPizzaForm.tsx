import { ChangeEvent, FC, FormEvent, useState } from 'react'
import Pizza from '../models/Pizza'
import './styles.css'

interface AddPizzaFormProps {
	addPizza: (newPizza: Pizza) => void
}

const initState = {
	title: '',
	price: '',
	image: '',
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
	const [newPizza, setNewPizza] = useState<{
		title: string
		price: string
		image: string
	}>(initState)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setNewPizza({ ...newPizza, [name]: value })
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { title, price, image } = newPizza
		if (title && price && image) {
			addPizza({ title, price: Number(price), image, id: Date.now() })
			setNewPizza(initState)
		}
	}

	console.log('newPizza>>>', newPizza)

	return (
		<form onSubmit={handleSubmit}>
			<input
				name='title'
				type='text'
				placeholder='Название'
				onChange={handleChange}
				value={newPizza.title}
			/>
			<input
				name='price'
				type='text'
				placeholder='Стоимость'
				onChange={handleChange}
				value={newPizza.price}
			/>
			<input
				name='image'
				type='text'
				placeholder='Изображение'
				onChange={handleChange}
				value={newPizza.image}
			/>
			<button type='submit'>+ Добавить в меню</button>
		</form>
	)
}

export default AddPizzaForm
