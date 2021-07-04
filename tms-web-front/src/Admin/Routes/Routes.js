import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import PreLoader from "../../PreLoader";

const Leagues = lazy(() => import('../Pages/Leagues/Leagues'));
const Stadiums = lazy(() => import('../Pages/Stadiums/Stadiums'));
const Players = lazy(() => import('../Pages/Players/Players'));
const Teams = lazy(() => import('../Pages/Teams/Teams'));
const Orders = lazy(() => import('../Pages/Orders/Orders'));
const Dashboard = lazy(() => import('../Pages/Dashboard/Dashboard'));
const Subscriptions = lazy(() => import('../Pages/Subscriptions/Subscriptions'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));

const routes = [
    {
        path: "/Admin",
        component: Dashboard,
    },
    {
        path: "/Admin/Leagues",
        component: Leagues,
    },
    {
        path: "/Admin/Stadiums",
        component: Stadiums,
    },
    {
        path: "/Admin/Players",
        component: Players,
    },
    {
        path: "/Admin/Teams",
        component: Teams,
    },
    {
        path: "/Admin/Orders",
        component: Orders,
    },
    {
        path: "/Admin/Subscriptions",
        component: Subscriptions,
    },
    {
        path: "/Admin/Contacts",
        component: Contacts,
      },
];

const Routes = (props) => {
    return (
        <Suspense fallback={<PreLoader />}>
            <div className="routerWrapperAdmin">
                <Switch>
                    {routes.map(({ path, component }, index) => {
                        if (path) {
                            return (
                                <Route key={index} path={path} component={component} exact />
                            );
                        } else {
                            return <Route key={index} component={component} exact />;
                        }
                    })}
                </Switch>
            </div>
        </Suspense>
    );
}

export default Routes;