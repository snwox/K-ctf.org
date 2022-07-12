import React, { Children } from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home,Error404,Ctfs,Users,Rank,Information} from '../pages';
import {MainLayout} from '../layouts';

const Router: React.FC = (): JSX.Element => {
    return <AuthRouter />
};
const UnAuthRouter: React.FC = (): JSX.Element => {
    const routes = useRoutes([{
        path: '/',
        element: <MainLayout />,
        children:[
            { index:true, element: <Home />},
            { path:"ctfs", element: <Ctfs />},
            { path:"users", element: <Users />},
            { path:"rank",element: <Rank />},
            { path:"*", element: <Error404 />}
        ]
    }]);
    return <>{routes}</>;
};
const AuthRouter: React.FC = (): JSX.Element => {
    const routes = useRoutes([{
        path: '/',
        element: <MainLayout />,
        children:[
            { index:true, element: <Home />},
            { path:"ctfs", element: <Ctfs />},
            { path:"users", element: <Users />},
            { path:"rank",element: <Rank />},
            { path:"my",element: <Information />},
            { path:"*", element: <Error404 />}
        ]
    }]);
    return <>{routes}</>;
};
const AdminRouter: React.FC = (): JSX.Element => {
    const routes = useRoutes([{
        path: '/',
        element: <MainLayout />,
        children:[
            { index:true, element: <Home />},
            { path:"ctfs", element: <Ctfs />},
            { path:"users", element: <Users />},
            { path:"rank",element: <Rank />},
            { path:"*", element: <Error404 />}
        ]
    }]);
    return <>{routes}</>;
};
  
export { UnAuthRouter,AuthRouter,AdminRouter,Router };