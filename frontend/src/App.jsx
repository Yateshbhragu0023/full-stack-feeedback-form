import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import AddFeeadback from './Components/AddFeeadback'
import Layout from './Components/Layout'
import ViewFeeedback from './Components/ViewFeeedback'
import Context from './Context'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: '/addfeedback',
            element: <AddFeeadback />
          },
          {
            path: '/viewfeedback',
            element: <ViewFeeedback />
          }
        ]
      },

    ]
  )

  return (
    <Context>
      <RouterProvider router={routes} />
    </Context>
  )
}
