import React, { lazy, Suspense } from 'react'
import {Switch, Route } from 'react-router-dom';
import PreLoader from '../PreLoader';


const User = lazy(() => import('../User/User'));
const Admin = lazy(() => import('../Admin/Admin'));
const NotFound = lazy(() => import('../NotFound'));
const Login = lazy(() => import('../Login'));
const SignUp = lazy(() => import('../SignUp'));


const routes = [
    {
        path: "/",
        component:User
    },
    {
        path: "/Login",
        component:Login
    },
    {
        path: "/SignUp",
        component:SignUp
    },
    {
        path: "/Contact",
        component:User
    },
    {
        path: "/Leagues",
        component:User
    },
    {
        path:"/Teams",
        component:User
    },
    {
        path: "/Leagues/:id",
        component:User
    },
    {
        path: "/About",
        component:User
    },
    {
        path: "/Players",
        component:User
    },
    {
        path: "/Admin",
        component: Admin,
    },
    {
        path: "/Admin/Players",
        component: Admin,  
    },
    {
        path: "/Admin/Stadiums",
        component:Admin
    },
    {
        path: "/Admin/Teams",
        component:Admin
    },
    {
        path: false,
        component: NotFound,
    },
];

const Routes = (props) =>{
    return(
        <div className="routerWrapper">
            <Suspense fallback={<PreLoader/>}>
                <Switch>
                {routes.map(({ path, component }, index) => {
                    if(path){
                        return (
                            <Route key={index} path={path} component={component} exact />
                        );
                    }else {
                        return <Route key={index} component={component} exact />;
                    }
                })}
                </Switch>
            </Suspense>
        </div>
    );
}

export default Routes;