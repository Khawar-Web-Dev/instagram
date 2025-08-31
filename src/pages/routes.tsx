import '../assets/index.css'
import { LayoutSelector } from '../layouts/layoutExports';
import { Explore, Home, Messages, Profile, Reels, Search } from './pageExports';
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

export const searchRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/search",
    component: () => <Search />,
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


const routeTree = rootRoute.addChildren([homeRoute, searchRoute, exploreRoute, reelsRoute, messagesRoute, profileRoute]);

export const router = createRouter({ routeTree });
