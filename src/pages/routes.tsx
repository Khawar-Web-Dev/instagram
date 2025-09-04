import '../assets/index.css'
import { LayoutSelector } from '../layouts/layoutExports';
import { Explore, Home, Messages, Profile, Reels } from './pageExports';
import {
    createRoute,
    createRouter,
    createRootRoute,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
    component: () => <LayoutSelector />,
});

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Home />,
});

export const exploreRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/explore",
    component: () => <Explore />,
});

export const reelsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/reels",
    component: () => <Reels />,
});

export const messagesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/messages",
    component: () => <Messages />,
});

export const profileRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/$profile",
    component: () => <Profile />,
});


const routeTree = rootRoute.addChildren([homeRoute, exploreRoute, reelsRoute, messagesRoute, profileRoute]);

export const router = createRouter({ routeTree });
