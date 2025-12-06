import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../component/Layout/RootLayout';
import Home from '../component/Pages/Home';
import Login from '../component/Authenticate/Login';
import Register from '../component/Authenticate/Register';
import Error from '../component/error/Error';
import PrivateRouteProvider from '../component/PrivateRoute/PrivateRouteProvider';
import AllBook from '../component/PrivateRoute/AllBook';
import AddBook from '../component/PrivateRoute/AddBook';
import CategorizedBook from '../component/PrivateRoute/CategorizedBook';
import BookDetail from '../component/PrivateRoute/BookDetail';

let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },


        // private routes
        {
            path: '/allbooks',
            element: <PrivateRouteProvider>
                     <AllBook></AllBook>
            </PrivateRouteProvider>
        },
        {
          path: '/addbook',
          element: <PrivateRouteProvider>
                <AddBook></AddBook>
          </PrivateRouteProvider>
        },
        {
          path:'/book/:category',
          element: <PrivateRouteProvider>
                <CategorizedBook></CategorizedBook>
          </PrivateRouteProvider>
        },
        {
          path:'/book-detail/:id',
          loader: ({params}) => fetch(`http://localhost:3000/book-detail/${params.id}`),
          element:<PrivateRouteProvider>
            <BookDetail></BookDetail>
          </PrivateRouteProvider>
        },


        // authentication routes
        {
            path:'/login',
            Component: Login,
        },
        {
            path:'/register',
            Component: Register
        }

    ]
  },
  {
    path: '/*',
    Component: Error,
  }
]);

export default router;