import React from "react";
import ReactDOM from "react-dom/client";
import { FOOD_IMAGE_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const { resid } = useParams();
    const [MenuToggle, SetMenuToggle] = useState(null);
    const { ResDetails, MenuCategory } = useRestaurantMenu(resid);
    // console.log(MenuCategory);
    if (ResDetails === null) {
        return <Shimmer />
    }
    const { name, avgRating, costForTwoMessage, cuisines } = ResDetails;
    return (<div className="restaurant-menu-container text-center">
        <h1 className="font-bold mt-6 mb-3 text-2xl">{name}</h1>
        <h3 className="font-bold text-lg">Rating : {avgRating} <br />{costForTwoMessage}<br />{cuisines.join(", ")}</h3>
        {
            MenuCategory.map((category, index) => {
                return <RestaurantCategory key={category ?.card ?.card ?.title} data={category}
                    ShowIndex={index === MenuToggle ? true : false}
                    SetShowIndex={() => SetMenuToggle(prev => prev === index ? null : index)} />
            })
        }
    </div>);
}

export default RestaurantMenu;