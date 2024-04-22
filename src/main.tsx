import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import { routes } from './routes/router'
import { PlanningContext, PlanningProvider } from './context/planning'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlanningProvider>
      <PlanningContext.Consumer>
          {value => <RouterProvider router={routes(value)}/>}
      </PlanningContext.Consumer>
    </PlanningProvider>
  </React.StrictMode>,
)
