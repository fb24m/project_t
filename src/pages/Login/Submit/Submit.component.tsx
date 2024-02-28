import { FormEvent, useState } from 'react'
import { Button } from '../../../ui/components/Button/Button.component'
import { Input } from '../../../ui/components/Input/Input.component'
import styles from './Submit.module.scss'
import { useNavigate } from 'react-router-dom'
import { Popup } from '../../../ui/components/Popup/Popup.component'

const submitLogin = async (e: FormEvent<HTMLFormElement>, correct: () => void, incorrect: () => void) => {
	e.preventDefault()
	const formData = new FormData(e.target as HTMLFormElement)
	const code = +formData.get('code')!

	const response = await fetch(`http://5.35.91.115/auth/email-login/${localStorage.getItem('saved_user_id')}?code=${code}`)
	const json = await response.json()

	if (json.access_token) {
		localStorage.setItem('json.access_token', json.access_token)
		localStorage.setItem('json.refresh_token', json.refresh_token)
		correct()
	}

	else {
		incorrect()
	}
}

const LoginSubmit = () => {
	const navigate = useNavigate()
	const [opened, setOpened] = useState(false)

	return <>
		<p className={styles.suggestion}>
			На почту <strong>{localStorage.getItem('saved_email') ? localStorage.getItem('saved_email') : 'Почта не сохранена'}</strong> отправлен шестизначный код подтверждения. <Button appearance="link" className={styles.forgot}>Указали неправильную почту?</Button>
		</p>
		<form onSubmit={(e) => submitLogin(e, () => { navigate('/chats') }, () => { setOpened(true) })} className={styles.form}>
			<Input className={styles.input} name="code" type="text" placeholder="Введите код" required />
			<Button type="submit">Подтвердить</Button>
		</form>
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

export default LoginSubmit
