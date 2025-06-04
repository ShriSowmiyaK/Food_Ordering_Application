import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
const CartStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});
export default CartStore;