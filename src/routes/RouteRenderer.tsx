import React, { Suspense, useEffect } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { privateRoutes, publicRoutes } from './routesConfig';

const SuspenseRoute = (Component: React.ComponentType<any>, title?: string) => (
    <>
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
        <TitleUpdater title={title || ""} />
    </>
);

const TitleUpdater = ({ title }: { title: string }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
};

const RouteRenderer = () => {
    const routes: RouteObject[] = [
        // Public routes
        ...publicRoutes.map((route) => ({
            path: route.path,
            element: SuspenseRoute(route.element, route.title || ""), // Wrap with Suspense and title
        })),

        // Private route group (protected by PrivateRoute)
        {
            path: '/',
            element: <PrivateRoute />,  // Protect private routes
            children: privateRoutes.map((route) => ({
                path: route.path,
                element: SuspenseRoute(route.element, route.title || ""), // Wrap with Suspense and title
            })),
        },
    ];

    return useRoutes(routes);
};

export default RouteRenderer;
