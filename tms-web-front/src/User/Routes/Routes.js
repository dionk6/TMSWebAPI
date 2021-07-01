import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PreLoader from "../../PreLoader";

const Home = lazy(() => import("../Pages/Home/Home"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Leagues = lazy(() => import("../Pages/Leagues/Leagues"));
const LeagueDetail = lazy(() => import("../Pages/LeagueDetail/LeagueDetail"));
const About = lazy(() => import("../Pages/About/About"));
const Teams = lazy(() => import("../Pages/Teams/Teams"));
const Players = lazy(() => import("../Pages/Players/Players"));
const Product = lazy(() => import("../Pages/Product/Product"));
const Order = lazy(() => import("../Pages/Order/Order"));
const TeamDetail = lazy(() => import("../Pages/TeamDetail/TeamDetail"));

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Contact",
    component: Contact,
  },
  {
    path: "/Leagues",
    component: Leagues,
  },
  {
    path: "/Leagues/:id",
    component: LeagueDetail,
  },
  {
    path: "/Teams/:id",
    component: TeamDetail,
  },
  {
    path: "/About",
    component: About,
  },
  {
    path: "/Teams",
    component: Teams,
  },
  {
    path: "/Players",
    component: Players,
  },
  {
    path: "/Product/:id",
    component: Product,
  },
  {
    path: "/Order/:id",
    component: Order,
  },
];

const Routes = (props) => {
  return (
    <Suspense fallback={<PreLoader />}>
      <div className="routerWrapperUser">
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
};

export default Routes;
