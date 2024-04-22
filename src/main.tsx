import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import { routes } from './routes/router'
import { PlanningContext } from './context/planning'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlanningContext.Consumer>
        {value => <RouterProvider router={routes(value)}/>}
    </PlanningContext.Consumer>

  </React.StrictMode>,
)
