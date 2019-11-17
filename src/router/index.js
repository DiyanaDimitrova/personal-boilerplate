import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page from "../containers/page/Page";

const routes = [
  {
    path: "/",
    component: Page
  }
];

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} />
      ))}
    </Switch>
  </BrowserRouter>
);