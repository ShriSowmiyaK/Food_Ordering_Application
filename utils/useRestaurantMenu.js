import React from "react";
import ReactDOM from "react-dom/client";
import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
    const [ResDetails, setResDetails] = useState(null);
    const [MenuCategory, setMenuCategory] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resid);
        const json = await data.json();
        // { console.log(json); }
        const MenuCategory = (json ?.data ?.cards[4] ?.groupedCard ?.cardGroupMap ?.REGULAR ?.cards).filter(
            (c) => c ?.card ?.card ?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        const aboutRes = json ?.data ?.cards[2] ?.card ?.card ?.info;
        setResDetails(aboutRes);
        // console.log(json ?.data ?.cards[4] ?.groupedCard ?.cardGroupMap ?.REGULAR ?.cards[1] ?.card ?.card ?.carousel );
        // console.log(json ?.data ?.cards[2] ?.card ?.card ?.info);
        setMenuCategory(MenuCategory);
    }
    return { ResDetails, MenuCategory };
}

export default useRestaurantMenu;