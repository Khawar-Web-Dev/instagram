import '../assets/index.css'
import { Home, About } from './index';
import {
    Outlet,
    createRoute,
    createRouter,
    createRootRoute,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
    component: () => <Outlet />,
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Home />,
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: () => <About />,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = createRouter({ routeTree });
