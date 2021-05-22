import React, { lazy, Suspense } from 'react'
import {Switch, Route } from 'react-router-dom';

const Leagues = lazy(() => import('../Pages/Leagues/Leagues'));
const Stadiums = lazy(() => import('../Pages/Stadiums/Stadiums'));
const Players = lazy(() => import('../Pages/Players/Players'));


const routes = [
    {
        path: "/Admin",
        component: Leagues,
    },
    {
        path: "/Admin/Stadiums",
        component: Stadiums,
    },
    {
        path: "/Admin/Players",
        component: Players,
    }
];

const Routes = (props) =>{
    return(
        <div className="routerWrapperAdmin">
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