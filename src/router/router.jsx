import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../component/Layout/RootLayout';
import Home from '../component/Pages/Home';
import Login from '../component/Authenticate/Login';
import Register from '../component/Authenticate/Register';

let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        // authentication routes
        {
            path:'logIn',
            Component: Login,
        },
        {
            path:'register',
            Component: Register
        }

    ]
  },
]);

export default router;