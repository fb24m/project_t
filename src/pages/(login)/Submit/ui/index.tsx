import { useForm } from 'react-hook-form'
import { Button } from '@/shared/ui/components/Button/Button.component'
import { Input } from '@/shared/ui/components/Input/Input.component'
import styles from '@/pages/(login)/Layout.module.scss'

import Cookies from 'js-cookie'
import { useEmailSubmit } from '../hooks/useEmailSubmit'

const Registration = () => {
	const { register, handleSubmit, getFieldState } = useForm<{ code: string }>()

	const { isPending, mutate } = useEmailSubmit()

	const onSubmit = handleSubmit(({ code }) => {
		mutate(code)
	})

	return (
		<div>
			<p className={styles.description}>
				{Cookies.get('submit_function') === 'registration'
					? `На вашу почту ${Cookies.get('saved_email')} еще не зарегистрировано аккаунта. Введите код, отправленный на почту. Затем вам будет предложено указать ваши данные.`
					: `Введите код, отправленный на почту ${Cookies.get('saved_email')} для входа в аккаунт`}
			</p>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.block}>
					<Input type="text" {...register('code', { required: true, pattern: new RegExp('\\d\\d\\d\\d\\d\\d') })} placeholder="Код" invalid={!!getFieldState('code').error} className={styles.input} />
					<Button appearance="primary" type="submit" icon="arrow_forward" iconPosition="end">{isPending ? 'Loading' : 'Далее'}</Button>
				</div>
			</form>
			{getFieldState('code').invalid ? <span className={styles.hint}>Код должен состоять из 6 цифр</span> : ''}
		</div>
	)
}

export default Registration
