import { FormEvent, useState } from 'react'
import { Button } from '../../../ui/components/Button/Button.component'
import { Input } from '../../../ui/components/Input/Input.component'
import { Popup } from '../../../ui/components/Popup/Popup.component'
import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'

const submitLogin = async (e: FormEvent<HTMLFormElement>, then: () => void) => {
	e.preventDefault()
	const formData = new FormData(e.target as HTMLFormElement)

	console.log(formData.get('email'))

	localStorage.setItem('saved_email', formData.get('email')! as string)

	then()
}

const LoginHome = () => {
	const [opened, setOpened] = useState(false)
	const navigate = useNavigate()

	return <>
		<p className={styles.description}>
			Укажите почту, которую указывали при регистрации или на которую хотите зарегистрировать аккаунт
		</p>
		<form onSubmit={(e) => submitLogin(e, () => { navigate('/login/submit') })} className={styles.form}>
			<Input className={styles.input} name="email" type="email" placeholder="email" required />
			<Button type="submit">Продолжить</Button>
		</form>
		<Button onClick={() => setOpened(true)} appearance="link" className={styles.forgot}>Забыли email?</Button>
		<Popup opened={opened}>
			Если вы забыли email, напишите в техподдержку для восстановления. Вам придется предоставить доказательства того, что аккаунт принадлежит вам

			<div className={styles.buttons}>
				<Button appearance="primary" className={styles.forgot}>Тех. поддержка</Button>
				<Button onClick={() => setOpened(false)} appearance="secondary" className={styles.forgot}>Закрыть</Button>
			</div>
		</Popup>
	</>
}

export default LoginHome
