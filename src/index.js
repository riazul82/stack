import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);