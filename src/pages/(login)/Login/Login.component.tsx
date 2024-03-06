import { useForm } from 'react-hook-form'
import { Button } from '../../../ui/components/Button/Button.component'
import { Input } from '../../../ui/components/Input/Input.component'
import styles from './Login.module.scss'
import { useState } from 'react'

const Login = () => {
	const { register, handleSubmit } = useForm<{ email: string }>()
	const [emailIsEmail, setEmailIsEmail] = useState(true)

	const onSubmit = handleSubmit((d) => {
		const emailIsEmail = !!d.email.match(new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'g'))
		setEmailIsEmail(emailIsEmail)
	})

	return (
		<div>
			<p className={styles.description}>Добро пожаловать в Project T. Введите вашу почту для продолжения</p>
			<form className={styles.form} onSubmit={onSubmit}>
				<Input type="text" {...register('email')} placeholder="login@example.com" invalid={!emailIsEmail} className={styles.input} />
				<Button appearance="primary" type="submit" icon="arrow_forward" iconPosition="end">Далее</Button>
			</form>
			{!emailIsEmail ? <span className={styles.hint}>Введите электронную почту</span> : ''}
		</div>
	)
}

export default Login
