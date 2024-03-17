import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import { AppLayout } from './pages/Layout/Layout.component'

const Login = {
	Layout: lazy(() => import('./pages/(login)/Layout.component')),
	Login: lazy(() => import('./pages/(login)/Login/ui/Login.component')),
	Submit: lazy(() => import('./pages/(login)/Submit/ui')),
	Registration: lazy(() => import('./pages/(login)/Registration/ui')),
}
const Home = lazy(() => import('./pages/Home/Home.component'))
const Chats = lazy(() => import('./pages/Chats/Chats.component'))

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route Component={AppLayout}>
					<Route index Component={Home} />
					<Route path="/chats" Component={Chats} />
					<Route Component={Login.Layout}>
						<Route path='/login' Component={Login.Login} />
						<Route path='/registration' Component={Login.Registration} />
						<Route path='/submit' Component={Login.Submit} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
