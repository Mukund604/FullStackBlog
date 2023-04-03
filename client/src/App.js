import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Write from './Pages/Write'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Single from '../src/Pages/Single'
import '../src/Styles.scss'


const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/Write",
        element: <Write />
      }
    ]
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Register />
  },
])


function App() {
  return (
    <>
      <div className='app'>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </div>

    </>
  );
}

export default App;
