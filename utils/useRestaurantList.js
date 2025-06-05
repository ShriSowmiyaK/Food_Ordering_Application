import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "./constants";


const useRestaurantList = () => {
    const [OriginalRestaurantList, SetOriginalRestaurantList] = useState([]);
    const [resDataList, setResDataList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    //Fetching data from swiggy api
    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        // console.log(json);
        const RESTAURANT_LIST = json ?.data ?.cards[0] ?.groupedCard ?.cardGroupMap ?.RESTAURANT ?.cards;
        SetOriginalRestaurantList(RESTAURANT_LIST);
        setResDataList(RESTAURANT_LIST);
    }

    return { OriginalRestaurantList, resDataList, SetOriginalRestaurantList, setResDataList };
}

export default useRestaurantList;
