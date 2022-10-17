import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Categories from '../../Pages/Categories';
import Checkout from '../../Pages/Checkout';
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
        },
        {
            path: '/Categories',
            element: <Categories />,
        },
        {
            path: '/Categories/:id',
            element: <>Categories detail</>
        },
        {
            path: '/Checkout',
            element: <Checkout />,
        },
        {
            path: '/Checkout/:CheckoutId',
            element: <>Checkout detail</>
        },
    ]
)
export default router

