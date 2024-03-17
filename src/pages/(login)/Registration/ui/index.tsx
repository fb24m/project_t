import clsx from 'clsx'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from '@/pages/(login)/Layout.module.scss'
import { Button } from '@/shared/ui/components/Button/Button.component'
import { Input } from '@/shared/ui/components/Input/Input.component'
import { Textarea } from '@/shared/ui/components/Textarea/Textarea.component'
import { useRegistration } from '../hooks/useRegistration'
import { RegistartionData } from '../interfaces/RegistrationData.interface'

const Registration = () => {
	const { register, handleSubmit } = useForm<RegistartionData>()
	const navigate = useNavigate()

	const { mutate, isPending, isSuccess } = useRegistration()

	const onSubmit = handleSubmit((data) => {
		mutate(data)
	})

	useEffect(() => {
		if (isSuccess) {
			navigate('/chats')
		}
	}, [isSuccess, navigate])

	return (
		<>
			<p className={styles.description}>
				Заполните информацию, чтобы зарегистироваться в T
			</p>
			<form onSubmit={onSubmit} className={styles.form}>
				<div className={styles.block}>
					<Input {...register('name', { required: true })} placeholder="Имя*" />
					<Input {...register('surname')} placeholder="Фамилия" />
				</div>
				<Input {...register('username')} placeholder="Имя пользователя" />
				<p className={clsx(styles.description, styles.small)}>Если вы не заполните имя пользователя, вас можно будет найти только по электронной почтеы</p>
				<Textarea {...register('bio')} placeholder="Расскажите немного о себе (TODO)" />
				<p className={clsx(styles.description, styles.small)}>
					Обязательные поля помечены *
				</p>
				<Button type="submit">{isPending ? 'Подождите...' : 'Зарегистрироваться'}</Button>
			</form>
		</>
	)
}

export default Registration