import React, { lazy } from "react";

import Home from "../pages/Home";
// const About = lazy(() => import('../pages/About'));
// const Dashboard = lazy(() => import('../pages/Dashboard'));
const Login = lazy(() => import("../pages/Login"));

interface RouteConfig {
  path: string;
  element: React.ComponentType<any>;
  title?: string;
}

export const publicRoutes: RouteConfig[] = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/",
    element: Home,
  },
];

export const privateRoutes: RouteConfig[] = [
  //   {
  //     path: '/dashboard',
  //     element: <Dashboard />,
  //   },
];
