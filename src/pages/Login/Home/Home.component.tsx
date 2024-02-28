import { useState } from 'react'
import { Button } from '../../../ui/components/Button/Button.component'
import { Input } from '../../../ui/components/Input/Input.component'
import { Popup } from '../../../ui/components/Popup/Popup.component'
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

const submitLogin = async (setErrorOpened: (state: boolean) => void, navigate: (url: string) => void) => {
	const form: HTMLFormElement = document.querySelector('#form') as HTMLFormElement
	const formData = new FormData(form)

	const email = formData.get('email')! as string

	console.log(email)

	const response = await fetch(`http://5.35.91.115/auth/login?email=${email}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email
		})
	})

	const json = await response.json()

	if (response.ok) {
		localStorage.setItem('saved_user_id', json.id)
		localStorage.setItem('saved_email', email)
		navigate('/login/submit')
	}
	else {
		setErrorOpened(true)
		return json
	}
}

const LoginHome = () => {
	const [opened, setOpened] = useState(false)
	const [errorOpened, setErrorOpened] = useState(true)
	const navigate = useNavigate()

	const { isPending, data, mutate } = useMutation({
		mutationKey: ['login'],
		mutationFn: () => submitLogin(setErrorOpened, navigate)
	})



	return <>
		<p className={styles.description}>
			Укажите почту, которую указывали при регистрации или на которую хотите зарегистрировать аккаунт
		</p>
		<form id="form" onSubmit={(e) => { e.preventDefault(); mutate() }} className={styles.form}>
			<Input className={styles.input} name="email" type="email" placeholder="email" required />
			<Button type="submit">{isPending ? 'Loading..' : 'Продолжить'}</Button>
		</form>
		<Button onClick={() => setOpened(true)} appearance="link" className={styles.forgot}>Забыли email?</Button>
		<Popup opened={opened}>
			Если вы забыли email, напишите в техподдержку для восстановления. Вам придется предоставить доказательства того, что аккаунт принадлежит вам

			<div className={styles.buttons}>
				<Button appearance="primary" className={styles.forgot}>Тех. поддержка</Button>
				<Button onClick={() => setOpened(false)} appearance="secondary" className={styles.forgot}>Закрыть</Button>
			</div>
		</Popup>
		<Popup opened={errorOpened && data}>
			{data?.detail}

			<div className={styles.buttons}>
				<Button appearance="primary" className={styles.forgot}>Тех. поддержка</Button>
				<Button onClick={() => setErrorOpened(false)} appearance="secondary" className={styles.forgot}>Закрыть</Button>
			</div>
		</Popup>
	</>
}

export default LoginHome
