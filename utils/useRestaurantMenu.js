import React from "react";
import ReactDOM from "react-dom/client";
import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
    const [ResDetails, setResDetails] = useState(null);
    const [ResMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resid);
        const json = await data.json();
        const menuList = (json ?.data ?.cards[4] ?.groupedCard ?.cardGroupMap ?.REGULAR ?.cards[1] ?.card ?.card ?.itemCards)|| (json ?.data ?.cards[4] ?.groupedCard ?.cardGroupMap ?.REGULAR ?.cards[1] ?.card ?.card ?.carousel);
        const aboutRes = json ?.data ?.cards[2] ?.card ?.card ?.info;
        // console.log(menuList);
        setResDetails(aboutRes);
        // console.log(json ?.data ?.cards[4] ?.groupedCard ?.cardGroupMap ?.REGULAR ?.cards[1] ?.card ?.card ?.carousel );
        // console.log(json ?.data ?.cards[2] ?.card ?.card ?.info);

        setResMenu(menuList);
    }
    return { ResDetails, ResMenu };
}

export default useRestaurantMenu;