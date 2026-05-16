import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HomePage from './routes/homepage/HomePage'

import { createBrowserRouter, Route, RouterProvider, Link } from 'react-router-dom'
import ListPage from './routes/listpage/ListPage'
import { Layout, RequireAuth } from './routes/layout/Layout'
import SinglePage from './routes/singlepage/SinglePage'
import ProfilePage from './routes/profilePage/ProfilePage'
import Login from './routes/login/Login'
import Register from './routes/register/Register'
import ProfileUpdatePage from './routes/profileUpdatePage/ProfileUpdatePage'
import NewPostPage from './routes/newpostpage/NewPostPage'
import { listPageLoader, singlePageLoader } from './lib/loader'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />,
          loader  : listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader : singlePageLoader
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]
    }, {
  path: "/",
  element: <RequireAuth />,
  children: [
    {
      path: "/profile",
      element: <ProfilePage />
    },
    {
      path: "/profile/update",
      element: <ProfileUpdatePage />
    },
    {
      path : "/add",
      element : <NewPostPage/>
    }
  ]
}
  ])
  return (

    <RouterProvider router={router} />
  )
}

export default App