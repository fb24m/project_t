import Cookies from 'js-cookie'
import { Container } from "../../shared/ui/components/Container/Container.component"

const Chats = () => {
	return (
		<Container>
			Привет, ваш объект регистрации: {Cookies.get('submit_result')}
			Возвращенный из API объект после регистрации (если есть / если нет - вернется прошлый (если есть)) {Cookies.get('saved_user_accent')}
		</Container>
	)
}


export default Chats