import { Camera, Circle, CircleUserRound, Compass, Cross, Heart, Menu, Plus, Search, Send, SquarePlay } from "lucide-react";

type SidebarTab = {
    id: number,
    title: string,
    Icon: React.FC<any>,
    link?: string,
};

export const sidebarTabs: SidebarTab[] = [
    { id: 1, title: "Home", Icon: Camera, link: '/'},
    { id: 2, title: "Search", Icon: Search},
    { id: 3, title: "Explore", Icon: Compass, link: '/explore'},
    { id: 4, title: "Reels", Icon: SquarePlay, link: '/reels'},
    { id: 5, title: "Messages", Icon: Send, link: '/messages'},
    { id: 6, title: "Notifications", Icon: Heart},
    { id: 7, title: "Create", Icon: Plus},
    { id: 8, title: "Profile", Icon: CircleUserRound, link: '/:profile'},
];

export const belowSidebarTabs: SidebarTab[] = [
    { id: 1, title: "Meta AI", Icon: Circle, link: '#'},
    { id: 2, title: "AI Studio", Icon: Cross, link: '#'},
    { id: 3, title: "More", Icon: Menu, link: '#'},
]