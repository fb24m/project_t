import { FormEvent } from 'react'
import { Button } from '../../../ui/components/Button/Button.component'
import { Input } from '../../../ui/components/Input/Input.component'
import styles from './Registration.module.scss'
import { useNavigate } from 'react-router-dom'

const submitLogin = async (e: FormEvent<HTMLFormElement>, then: () => void) => {
	e.preventDefault()
	const formData = new FormData(e.target as HTMLFormElement)

	const name = formData.get('name')! as string
	const surname = formData.get('surname')! as string
	const username = formData.get('username')! as string

	localStorage.setItem('saved_name', name)
	localStorage.setItem('saved_surname', surname)
	localStorage.setItem('saved_username', username)

	then()
}

const LoginRegistration = () => {
	const navigate = useNavigate()

	return <>
		<p className={styles.description}>
			Вы не зарегистрированы. Укажите ваши данные для продолжения
		</p>
		<form onSubmit={(e) => submitLogin(e, () => { navigate('/chats') })} className={styles.form}>
			<Input className={styles.input} name="name" type="text" placeholder="Имя" required />
			<Input className={styles.input} name="surname" type="text" placeholder="Фамилия (необязательно)" />
			<Input className={styles.input} name="username" type="text" placeholder="Имя пользователя" required />
			<Button type="submit">Продолжить</Button>
		</form>
	</>
}

export default LoginRegistration
