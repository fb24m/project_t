import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import styles from '@/pages/(login)/Layout.module.scss'
import { Button } from '@/shared/ui/components/Button/Button.component'
import { Input } from '@/shared/ui/components/Input/Input.component'
import { useEmailLogin } from '../hooks/useEmailLogin'

const Login = () => {
	const { register, handleSubmit, getFieldState } = useForm<{ email: string }>()
	const { invalid } = getFieldState('email')

	const { mutate, isPending } = useEmailLogin()

	const onSubmit = handleSubmit(({ email }) => {
		console.log(`Email: ${email}`)
		mutate(email)
	})

	return (
		<div className={clsx(styles.screen)}>
			<p className={styles.description}>Добро пожаловать в Project T. Введите вашу почту для продолжения</p>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.block}>
					<Input type="text" {...register('email', { required: true })} placeholder="login@example.com" invalid={invalid} className={styles.input} />
					<Button appearance="primary" type="submit" icon="arrow_forward" iconPosition="end">{isPending ? 'Загрузка...' : 'Далее'}</Button>
				</div>
			</form>
			{invalid ? <span className={styles.hint}>Введите электронную почту</span> : ''}
		</div>
	)
}

export default Login

//, pattern: new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'g')