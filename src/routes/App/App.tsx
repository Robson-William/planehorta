import { Outlet } from 'react-router-dom'
import { Menu } from '../../screens/Menu/Menu'
import { PlanningProvider } from '../../context/planning'

function App() {

  return (
    <>
      <Menu  />
      <Outlet />
    </>
  )
}

export default App
