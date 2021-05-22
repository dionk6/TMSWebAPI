import React, { lazy, Suspense } from 'react'
import {Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home/Home'));


const routes = [
    {
        path: "/",
        component: Home,
    },
];

const Routes = (props) =>{
    return(
        <div className="routerWrapperUser">
            <Suspense fallback={"Loading..."}>
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
            </Suspense>
        </div>
    );
}

export default Routes;