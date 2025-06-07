import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from '../../utils/CartSlice';
import { useSelector } from "react-redux";
const ItemList = ({ data, removeButton }) => {
    const count = useSelector((store) => store.cart.itemCount)
    const { itemCards } = data;
    const dispatch = useDispatch();
    const handleAdd = (cardList) => {
        // console.log(cardList);
        dispatch(addItem(cardList));
    }
    const handledelete = (cardList) => {
        dispatch(removeItem(cardList));
    }
    return (
        <div>
            {
                itemCards.map((cardList) => {
                    const { id, name, price, imageId, description, defaultPrice } = cardList ?.card ?.info;
                    const { rating } = cardList ?.card ?.info ?.ratings ?.aggregatedRating;
                    return (<div data-testid="items" key={id} className="flex items-center justify-between border-b-2 p-4">
                        <div className="w-3/4">
                            <p className="font-bold text-left text-lg">{name}</p>
                            <p className="font-bold text-left text-base p-2">₹ {price ? (price / 100) : (defaultPrice / 100)}</p>
                            {rating && (<p className="font-bold text-green-800 text-left text-base p-2">Ratings : {rating}</p>)}
                            <p className="text-left text-base">{description}</p>
                        </div>
                        {
                            !removeButton && imageId && (<div>
                                <img className="w-40 h-36" src={CDN_URL + imageId} />
                            </div>)
                        }
                        {removeButton && <div className="border mr-4 border-black-100 h-12 w-16 hover:bg-gray-100 text-green 800 font-bold py-2 px-4 "
                        >
                            {count[id]}
                        </div>}
                        <button data-testid="add" className="border border-black-100 h-15 hover:bg-gray-100 text-green 800 font-bold py-2 px-4 rounded-full"
                            onClick={() => handleAdd(cardList)}>
                            ADD +
                        </button>
                        {removeButton && <button className="border ml-4 border-black-100 h-15 hover:bg-gray-100 text-green 800 font-bold py-2 px-4 rounded-full"
                            onClick={() => handledelete(cardList)}>
                            REMOVE -
                        </button>}
                    </div>
                    );
                })
            }
        </div >
    );
}

export default ItemList;