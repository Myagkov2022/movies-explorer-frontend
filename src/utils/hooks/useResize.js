import { useState, useEffect } from "react";
import {
    SCREEN_SM,
    SCREEN_MD,
    SCREEN_LG,
} from "../constants";

const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentScreen, setCurrentScreen] = useState("SCREEN_LG");

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (width > SCREEN_MD) {
            setCurrentScreen("SCREEN_LG");
        } else if (width > SCREEN_SM) {
            setCurrentScreen("SCREEN_MD");
        } else {
            setCurrentScreen("SCREEN_SM");
        }
    }, [width]);

    return {
        width,
        isScreenSm: width <= SCREEN_SM,
        isScreenMd: width <= SCREEN_MD,
        isScreenLg: width <= SCREEN_LG,
        currentScreen: currentScreen,
    };
};

export  default useResize