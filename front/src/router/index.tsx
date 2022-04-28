import React, { Children } from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home,Error404} from '../pages';
import {MainLayout} from '../layouts';

const Router: React.FC = (): JSX.Element => {
    const mainRoutes = {
        path: '/',
        element: <MainLayout />,
        children:[
            { path:"/", element: <Home />},
            { path:"*", element: <Error404 />}
        ]
    };
    const routing = useRoutes([mainRoutes]);

    return <>{routing}</>;
};
  
export { Router };