import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx'
import BlogPages from './pages/Blogpages.jsx'
import {createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Loginpages from './pages/Loginpages.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
    },
    {
      path: "/login",
      element:<Loginpages />,
    },
     {
      path: "/about",
      element:<About />,
    }, 
     {
      path: "/blogpages",
      element:<BlogPages />,
    }, 
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
