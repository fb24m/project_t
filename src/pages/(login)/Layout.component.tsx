import { Outlet } from 'react-router-dom'
import { Container } from '@/shared/ui/components/Container/Container.component'
import styles from './Layout.module.scss'
import { Title1 } from '@/shared/ui/components/Title1/Title1.component'

const LoginLayout = () => {
	return <Container size="small" className={styles.container}>
		<Title1 className={styles.title}>Welcome to T</Title1>
		<Outlet></Outlet>
	</Container>
}

export default LoginLayout
