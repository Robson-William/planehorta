import { Outlet } from 'react-router-dom'
import { Menu } from '../../screens/Menu/Menu'
import { PlanningProvider } from '../../context/planning'

function App() {

  return (
    <>
      <PlanningProvider>
        <Menu  />
        <Outlet />
      </PlanningProvider>
    </>
  )
}

export default App
