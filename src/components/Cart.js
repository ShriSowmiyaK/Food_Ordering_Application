import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { emptyItems } from '../../utils/cartSlice';
const Cart = () => {
    const dispatch = useDispatch();
    const { items, cost } = useSelector((store) => store.cart);
    return (
        <div className="text-center">
            <h1 className="font-bold mt-6 mb-3 text-2xl">CART</h1>
            <div className="text-right mr-72">
                <button className="border border-black-100 h-12 hover:bg-gray-100 text-green 800 font-bold py-2 px-4 rounded-full" onClick={() => dispatch(emptyItems())}>
                    EMPTY CART
            </button>
            </div>
            {items.length != 0 ? (<div><div className="mx-auto w-3/4 bg-gray-50 my-4 shadow-lg ">
                < ItemList data={{ itemCards: items }} removeButton={true} /> </div>
                <h1 className="mt-6 mb-3 text-2xl">TOTAL : Rs {cost.toFixed(2)}</h1>
            </div>) : (<h1 className=" mt-6 mb-3 text-xl">YOUR CART IS EMPTY</h1>)}

        </div>

    );
}

export default Cart;