import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export const useEmailSubmit = () => {
	const submitType = Cookies.get('submit_function')
	const userId = Cookies.get('submit_user')
	const navigate = useNavigate()

	console.log(submitType)

	return useMutation({
		mutationKey: ['register'],
		mutationFn: async (code: string) => {
			const response = await fetch(`http://5.35.91.115/auth/email-${submitType}?code=${code}&user_id=${userId}`)

			const json = await response.json()

			Cookies.set('submit_result', JSON.stringify(json))


			if (submitType === 'reg') {
				navigate('/registration')
			}

			navigate('/chats')
		}
	})
}

// reg: auth/email-reg
// login: auth/email-login