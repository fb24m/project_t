import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export const useEmailLogin = () => {
	const navigate = useNavigate()

	return useMutation({
		mutationKey: ['login-email'],
		mutationFn: async (email: string) => {
			Cookies.set('saved_email', email)

			const response = await fetch(`http://5.35.91.115/auth/login/${email}`, { method: 'POST' })

			if (response.status === 404) {
				const response = await fetch(`http://5.35.91.115/auth/email-reg-send/${email}`, { method: 'POST' })

				if (response.ok) {
					Cookies.set('submit_function', 'reg')

					navigate('/submit')
				}
				else {
					console.log(response.statusText)
				}
			} else {
				Cookies.set('submit_function', 'login')

				const json = await response.json()

				Cookies.set('submit_user', json.id.toString())

				navigate('/submit')
			}
		}
	})
}
