import type { Variants } from "framer-motion";

export const divAnim:Variants = {
    "initial": {
        translateX: -700
    },
    "animate": {
        translateX: 0,
        transition: {
            ease: ['easeInOut'],
            duration: 0.5,
            delay: 0.5
        }
    },
    "exit": {
        translateX: -700,
    }
}

export const navAnim:Variants = {
    "initial": {
        width: "24rem"
    },
    "close": {
        width: "5rem",
        transition: {
            ease: ["easeInOut"],
            duration: 0.5
        }
    },
    "open": {
        width: "24rem",
        transition: {
            ease: ["easeInOut"],
            duration: 0.5,
        }
    }
    ,
    "exit": {
        width: "24rem",
    }
}

export const multiplePagePopupAnim:Variants = {
    "initial": {
        opacity: 0,
        transform: 'translateY(10%)'
    },
    "animate": {
        opacity: 1,
        transform: 'translateY(0)'
    },
    "exit": {
        opacity: 0,
        transform: 'translateY(10%)'
    }
}

export const settingMenuAnim:Variants = {
    "initial": {
        opacity: 0,
        transform: 'translateY(20%)'
    },
    "animate": {
        opacity: 1,
        transform: 'translateY(0)',
        transition: {
            duration: 0.2
        }
    },
    "exit": {
        opacity: 0,
        transform: 'translateY(20%)'
    }
}