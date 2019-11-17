import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from '../containers/error/ErrorBoundary';

const Home = lazy(() => import("../containers/page/Page"))

const routes = [
  {
    path: "/",
    component: Home
  }
];

export const AppRouter = () => (
  <BrowserRouter>
    <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
            {routes.map(route => (
                <Route key={route.path} path={route.path} component={route.component} />
            ))}
            </Switch>
        </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);