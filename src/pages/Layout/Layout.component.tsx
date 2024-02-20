import { Outlet } from 'react-router-dom'
import { Provider } from '../../components/Provider/Provider.component'
import './globals.scss'

export const AppLayout = () => {
  return <Provider>
    <Outlet />
  </Provider>
}