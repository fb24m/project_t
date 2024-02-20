import { useEffect, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (): ReactNode => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/login')
	}, [navigate])

	return (
		<></>
	)
}

export default Home
