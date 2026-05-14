import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HomePage from './routes/homepage/HomePage'

import { createBrowserRouter, Route, RouterProvider, Link } from 'react-router-dom'
import ListPage from './routes/listpage/ListPage'
import { Layout } from './routes/layout/Layout'
import SinglePage from './routes/singlepage/SinglePage'


const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element : <HomePage/>
        },
        {
          path: "/list",
          element : <ListPage/>
        },
         {
          path: "/:id",
          element : <SinglePage/>
        }
      ]
    }
  ])
  return (
  
    <RouterProvider router={router}/>
  )
}

export default App