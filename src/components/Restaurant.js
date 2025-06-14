import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../utils/constants";
const Restaurant = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData ?.card ?.card ?.info;
    return (< div className="item m-4 p-4 w-56 rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img className="fooditem rounded-lg " alt="food item" src={CDN_URL + cloudinaryImageId} />
        <h2 className="food-name font-bold py-4 text-lg">{name}</h2>
        <h3 className="food-cuisines">{cuisines.join(" , ")}</h3>
        <h3 className="food-ratings">Ratings - {avgRating}</h3>
        <h3 className="food-cost">Rs {costForTwo}</h3>
        <h3 className="food-delivery-time">Delivery Time {sla.slaString}</h3>
    </div >);
}
export const SwiggyPromoted = (Restaurant) => {
    return (props) => {
        return (
            < div >
                <label data-testid="promoted-label" className="rounded-lg font-bold bg-black text-white p-1 text-sm absolute">
                    Promoted
                </label>
                <Restaurant {...props} />
            </div >
        );
    }

}
export default Restaurant;