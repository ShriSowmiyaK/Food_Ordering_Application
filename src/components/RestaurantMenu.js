import React from "react";
import ReactDOM from "react-dom/client";
import { FOOD_IMAGE_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const { resid } = useParams();
    const { ResDetails, ResMenu } = useRestaurantMenu(resid);
    if (ResDetails === null) {
        return <Shimmer />
    }
    const { name, avgRating, costForTwoMessage, cuisines } = ResDetails;
    return (<div className="restaurant-menu-container">
        <h1>{name}</h1>
        <h3>{avgRating} {' '} {costForTwoMessage}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <div className="menus">
            <h2> MENU </h2>

            {
                ResMenu && ResMenu.map((item, index) => {
                    const info = item ?.card ?.info || item ?.dish ?.info || {};
                    const { imageId, name, description } = info;
                    const price = info.price || info.defaultPrice;
                    const id = info.id || info.id;
                    return (<div key={id} className="menu-item">
                        {imageId && <img className="fooditem" alt="food item" src={FOOD_IMAGE_URL + imageId} />}
                        <h3>{name}</h3>
                        {description && <p><b>Description : </b>{description}</p>}
                        <h3>Rs {price / 100}</h3>
                    </div>);
                })
            }

        </div>
    </div>);
}

export default RestaurantMenu;