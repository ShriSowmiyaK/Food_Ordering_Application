import React from "react";
import ReactDOM from "react-dom/client";
import { createSlice, current } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        restaurantId: "",
        itemCount: {

        },
        count: 0,
        cost: 0

    },
    reducers: {
        addItem: (state, action) => {
            if (state.itemCount[action.payload.card.info.id]) {
                state.itemCount[action.payload.card.info.id] = state.itemCount[action.payload.card.info.id] + 1;
            }
            else {
                state.itemCount[action.payload.card.info.id] = 1;
                state.items.push(action.payload);
            }
            state.count = state.count + 1;
            state.cost = state.cost + [action.payload.card.info.price || action.payload.card.info.defaultPrice] / 100
        },
        removeItem: (state, action) => {
            state.itemCount[action.payload.card.info.id] -= 1;
            state.cost = state.cost - [action.payload.card.info.price || action.payload.card.info.defaultPrice] / 100
            state.count = state.count - 1;
            if (state.itemCount[action.payload.card.info.id] == 0) {
                delete state.itemCount[action.payload.card.info.id];
                state.items = state.items.filter(item => item.card.info.id != action.payload.card.info.id)
            }
        },
        emptyItems: (state, action) => {
            state.items = [];
            state.restaurantId = "";
            state.itemCount = {};
            state.count = 0;
            state.cost = 0
        },
        setRestaurant: (state, action) => {
            if (state.restaurantId != action.payload) {
                state.restaurantId = action.payload;
                state.items = [];
                state.itemCount = {};
                state.count = 0;
                state.cost = 0
            }

        }
    }
})
export const { addItem, removeItem, emptyItems, setRestaurant } = CartSlice.actions;
export default CartSlice.reducer;