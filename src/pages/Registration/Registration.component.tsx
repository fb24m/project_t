import { useState } from 'react'
import { Button } from '../../ui/components/Button/Button.component'
import { Input } from '../../ui/components/Input/Input.component'
import styles from './Registration.module.scss'
import { useNavigate } from 'react-router-dom'
import { Popup } from '../../ui/components/Popup/Popup.component'
import { useMutation } from '@tanstack/react-query'

export const emailRegSend = async (email: string) => {
	const response = await fetch(`http://5.35.91.115/auth/email-reg-send/${email}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const json = await response.json()

	if (!response.ok) {
		return json.detail[0].msg
	}

	localStorage.setItem('saved_email', email)
	localStorage.setItem('saved_user_id', json.id)
}

const submitRegistration = async (setErrorOpened: (state: boolean) => void, navigate: (url: string) => void) => {
	const form = document.querySelector('#register-form') as HTMLFormElement
	console.log('submit')

	const formData = new FormData(form)

	const rawData = {
		email: formData.get('email')! as string
	}

	const send = await emailRegSend(rawData.email)

	if (!send) {
		navigate('/login/submit')
	}
	else {
		setErrorOpened(true)
		return send
	}
}

const Registration = () => {
	const [errorOpened, setErrorOpened] = useState(false)
	const navigate = useNavigate()

	const { isPending, data, mutate } = useMutation({
		mutationKey: ['registration'],
		mutationFn: () => submitRegistration(setErrorOpened, navigate)
	})


	return <>
		<p className={styles.suggestion}>
			Для регистрации укажите почту, ваше имя и фамилию, а также придумайте имя пользователя
		</p>
		<form id="register-form" onSubmit={(e) => { e.preventDefault(); mutate() }} className={styles.form}>
			<Input className={styles.input} name="email" type="email" placeholder="Почта" required />
			<Button type="submit">{isPending ? 'loading..' : 'Подтвердить'}</Button>
		</form >
		<div className={styles.buttons}>
			<Button appearance="link" className={styles.forgot}>Отправить еще раз</Button>
		</div>
		<Popup opened={data && errorOpened}>
			{data}

			<div className={styles.buttons}>
				<Button appearance="primary" onClick={() => { setErrorOpened(false) }} className={styles.forgot}>Закрыть</Button>
			</div>
		</Popup>
	</>
}

export default Registration
