import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  // {
  //   path:'/',
  //   element:<Home/>
  // }
])

function App() {

  return (
    <>
    
    <RouterProvider router={appRouter} />
    <Toaster />
    </>
  )
}

export default App
