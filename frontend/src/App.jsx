import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast';
import Jobs from './components/Jobs';
import Browser from './components/Browser';
import Profile from './components/Profile';
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
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browser',
    element:<Browser/>
  },
  {
    path:'/viewprofile',
    element:<Profile/>
  }
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
