import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { RegistartionData } from '../interfaces/RegistrationData.interface'

export const useRegistration = () => {
	return useMutation({
		mutationKey: ['use-registration'],
		mutationFn: async ({ bio, ...data }: RegistartionData) => {
			console.log(bio)
			console.log(JSON.stringify({
				id: Cookies.get('submit_user') ? +Cookies.get('submit_user')! : 0,
				...data,
			}))

			const response = await fetch('http://5.35.91.115/auth/registration', {
				method: 'POST',
				body: JSON.stringify({
					id: Cookies.get('submit_user') ? +Cookies.get('submit_user')! : 0,
					...data,
				}),
				headers: {
					'Content-Type': 'application/json',
					'accept': 'application/json',
				}
			})
			const json = await response.json()

			Cookies.set('saved_user_accent', JSON.stringify(json))
		}
	})
}