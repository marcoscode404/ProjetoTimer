import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* espaço onde cai ser posicionado o conteudo */}
      <Outlet />
    </div>
  )
}
