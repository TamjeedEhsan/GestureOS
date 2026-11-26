import { Outlet } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-layout__content">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
