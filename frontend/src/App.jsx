import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store' // Adjust the path as necessary
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import Jobs from './components/Jobs';
import Browser from './components/Browser';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';

// Define your routes
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
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },
  {
    path: '/browser',
    element: <Browser />
  },
  {
    path: '/viewprofile',
    element: <Profile />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
      <Toaster />
    </Provider>
  );
}

export default App;
