import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../../Pages/Home';
import Products from '../../Pages/Products';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/products',
            element: <Products />,
        },
        {
            path: '/products/:id',
            element: <>product detail</>
        }
    ]
)
export default router

