import React, { lazy, Suspense } from 'react'
import {Switch, Route } from 'react-router-dom';
import PreLoader from  '../../PreLoader';

const Home = lazy(() => import('../Pages/Home/Home'));
const Contact = lazy(() => import('../Pages/Contact/Contact'));
const Leagues = lazy(() => import ('../Pages/Leagues/Leagues'));

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/Contact",
        component: Contact
    },
    {
        path:"/Leagues",
        component: Leagues
    }
];

const Routes = (props) =>{
    return(
        <Suspense fallback={<PreLoader/>}>
            <div className="routerWrapperUser">
                <Switch>
                {routes.map(({ path, component }, index) => {
                    if (path) {
                        return (
                            <Route key={index} path={path} component={component} exact />
                        );
                    }else {
                        return <Route key={index} component={component} exact />;
                    }
                })}
                </Switch>
            </div>
        </Suspense>
    );
}

export default Routes;