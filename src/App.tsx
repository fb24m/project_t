import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import { AppLayout } from './pages/Layout/Layout.component'

const LoginHome = lazy(() => import('./pages/Login/Home/Home.component'))
const LoginLayout = lazy(() => import('./pages/Login/Layout/Layout.component'))
const LoginSubmit = lazy(() => import('./pages/Login/Submit/Submit.component'))
const LoginRegistration = lazy(() => import('./pages/Login/Registration/Registration.component'))
const Home = lazy(() => import('./pages/Home/Home.component'))
const Chats = lazy(() => import('./pages/Chats/Chats.component'))

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={AppLayout}>
					<Route index Component={Home} />
					<Route path="/chats" Component={Chats} />
					<Route Component={LoginLayout} path="/login">
						<Route index Component={LoginHome} />
						<Route path="/login/submit" Component={LoginSubmit} />
						<Route path="/login/registration" Component={LoginRegistration} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
