import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export const useEmailLogin = () => {
	const navigate = useNavigate()

	return useMutation({
		mutationKey: ['login-email'],
		mutationFn: async (email: string) => {
			Cookies.set('saved_email', email)

			const response = await fetch(`http://5.35.91.115/auth/login/${email}`, {
				method: 'POST'
			})

			if (response.status === 404) {
				console.log('no such user')
				Cookies.set('submit_function', 'registration')

				navigate('/registration')

				return
			}

			const json = await response.json()

			console.log(json)
		}
	})
}
