import { ChangeEvent, FC, FormEvent, useState } from 'react'
import Pizza from '../models/Pizza'
import './styles.css'

interface EditPizzaFormProps {
	data: Pizza
	updatePizza: (newPizza: Pizza) => void
	handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
	data,
	updatePizza,
	handleToggleEdit,
}) => {
	const [editPizza, setEditPizza] = useState<Pizza>(data)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEditPizza({ ...editPizza, [name]: value })
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { title, price, image } = editPizza
		if (title && price && image) {
			updatePizza(editPizza)
			handleToggleEdit()
		}
	}

	console.log('newPizza>>>', editPizza)

	return (
		<form className='edit-form' onSubmit={handleSubmit}>
			<input
				name='title'
				type='text'
				placeholder='Название'
				onChange={handleChange}
				value={editPizza.title}
			/>
			<input
				name='price'
				type='text'
				placeholder='Стоимость'
				onChange={handleChange}
				value={editPizza.price}
			/>
			<input
				name='image'
				type='text'
				placeholder='Изображение'
				onChange={handleChange}
				value={editPizza.image}
			/>
			<button type='submit'>Подтвердить</button>
		</form>
	)
}

export default EditPizzaForm
