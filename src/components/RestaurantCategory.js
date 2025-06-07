import React from "react";
import ReactDOM from "react-dom/client";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, ShowIndex, SetShowIndex }) => {
    const { card } = data ?.card;
    // console.log(card);
    const handleclick = () => {
        SetShowIndex();
    }
    return (
        <div className="mx-auto w-3/4 bg- gray - 50 my- 4 shadow- lg ">
            < div onClick={handleclick} className="flex justify-between p-4" >
                <span className="font-bold text-xl">{card.title}({card.itemCards.length})</span>
                <span className="font-bold text-2xl">{ShowIndex ? '↑' : '↓'}</span>
            </div >
            {ShowIndex && <ItemList data={card} removeButton={false} />}
        </div >
    );

}
export default RestaurantCategory;