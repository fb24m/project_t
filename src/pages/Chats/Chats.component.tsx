import { Container } from "../../components/Container/Container.component"

const Chats = () => {
	return <Container>
		Привет, {localStorage.getItem('saved_name')} {localStorage.getItem('saved_surname') ? localStorage.getItem('saved_surname') : <i>(фамилия не указана)</i>} ({localStorage.getItem('saved_username')})
	</Container>
}


export default Chats