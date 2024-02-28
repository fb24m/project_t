import { FormEvent, useState } from 'react'
import { Button } from '../../ui/components/Button/Button.component'
import { Input } from '../../ui/components/Input/Input.component'
import styles from './Registration.module.scss'
import { useNavigate } from 'react-router-dom'
import { Popup } from '../../ui/components/Popup/Popup.component'

const submitLogin = async (e: FormEvent<HTMLFormElement>, then: () => void) => {
	e.preventDefault()
	const formData = new FormData(e.target as HTMLFormElement)
	const rawData = {
		email: formData.get('email')! as string,
		firstName: formData.get('name')! as string,
		lastName: formData.get('surname')! as string,
		username: formData.get('username')! as string,
		password: formData.get('password')! as string
	}

	const response = await fetch('http://5.35.91.115/auth/registration', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"username": rawData.username,
			"name": rawData.firstName,
			"surname": rawData.lastName,
			"password": rawData.password,
			"email": rawData.email
		})
	})

	console.log(JSON.stringify({
		username: rawData.username,
		name: rawData.firstName,
		surname: rawData.lastName,
		password: rawData.password,
		email: rawData.email
	}))

	const json = await response.json()

	if (!response.ok) {
		console.log(json)
	}

	console.log(json)

	localStorage.setItem('saved_user_id', json.id)

	then()
}

const Registration = () => {
	const navigate = useNavigate()
	const [opened, setOpened] = useState(false)

	return <>
		<p className={styles.suggestion}>
			Для регистрации укажите почту, ваше имя и фамилию, а также придумайте имя пользователя
		</p>
		<form onSubmit={(e) => submitLogin(e, () => { navigate('/submit_email') })} className={styles.form}>
			<Input className={styles.input} name="email" type="email" placeholder="Почта" required />
			<Input className={styles.input} name="name" type="text" placeholder="Имя" required />
			<Input className={styles.input} name="surname" type="text" placeholder="Фамилия (не обязательно)" />
			<Input className={styles.input} name="username" type="text" placeholder="Имя пользователя" required />
			<Input className={styles.input} name="password" type="password" placeholder="Пароль" required />
			<Button type="submit">Подтвердить</Button>
		</form >
		<div className={styles.buttons}>
			<Button appearance="link" className={styles.forgot}>Отправить еще раз</Button>
		</div>
		<Popup opened={opened}>
			Вы ввели неверный код. У вас осталось 2 попытки.

			<div className={styles.buttons}>
				<Button appearance="primary" onClick={() => { setOpened(false) }} className={styles.forgot}>Закрыть</Button>
			</div>
		</Popup>
	</>
}

export default Registration
