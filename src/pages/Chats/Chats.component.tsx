// import { useQuery } from "@tanstack/react-query"
import { Container } from "../../components/Container/Container.component"

// const request = async <T,>(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<T> => {
// 	const response = await fetch(input, init)
// 	const json: T = await response.json()

// 	return json
// }

const Chats = () => {

	// const { isLoading, data, error } = useQuery({
	// 	queryKey: ['user'],
	// 	queryFn: () => request('http://5.35.91.115/user/me', {
	// 		mode: 'no-cors',
	// 		headers: {
	// 			'accept': 'application/json',
	// 			'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE3MDk5Njk5Njd9.xjHouJ5hFCd3clk3v-fkQ4-duOR3k_rgoFaMa7zOalQ`
	// 		}
	// 	})
	// })

	// console.log(`bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE3MDk5Njk5Njd9.xjHouJ5hFCd3clk3v-fkQ4-duOR3k_rgoFaMa7zOalQ`)

	return <Container>
		Привет, ваш сохраненный токен: {localStorage.getItem('json.access_token')}
	</Container>
}


export default Chats

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE3MDk5NzEyOTh9.l13vwGlCibq22Zds435Y3zMYJjGrBiUqX568TZEboS0
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE3MDk5NzEzNTd9.WjMdjHibmZu37pL1V5UGqPw0I7n0set3fp8mDWTK838