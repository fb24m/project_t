import { useForm } from 'react-hook-form'
import { Button } from '@/shared/ui/components/Button/Button.component'
import { Input } from '@/shared/ui/components/Input/Input.component'
import styles from '../Layout.module.scss'
import { useMutation } from '@tanstack/react-query'

import Cookies from 'js-cookie'

const Registration = () => {
	const { register, handleSubmit, getFieldState } = useForm<{ code: string }>()

	const { isPending, mutate } = useMutation({
		mutationKey: ['register'],
		mutationFn: async (code: string) => { console.log(`email: ${code}`) }
	})

	const onSubmit = handleSubmit(({ code }) => {
		mutate(code)
	})

	console.log(getFieldState('code').error)

	return (
		<div>
			<p className={styles.description}>
				{Cookies.get('submit_function') === 'registration' ? <>
					На вашу почту {Cookies.get('saved_email')} еще не зарегистрировано аккаунта. Введите код, отправленный на почту. Затем вам будет предложено указать ваши данные.</> : <></>}
			</p>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.block}>
					<Input type="text" {...register('code', { required: true, pattern: new RegExp('\\d\\d\\d\\d\\d\\d') })} placeholder="Код" invalid={!!getFieldState('code').error} className={styles.input} />
					<Button appearance="primary" type="submit" icon="arrow_forward" iconPosition="end">{isPending ? 'Loading' : 'Далее'}</Button>
				</div>
			</form>
			{getFieldState('code').error ? <span className={styles.hint}>Код должен состоять из 6 цифр</span> : ''}
		</div>
	)
}

export default Registration
