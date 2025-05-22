import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantList from "../../utils/useRestaurantList";
import useOnlineStatus from "../../utils/useOnlineStatus";
import OnlineStatusDisplay from "./OnlineStatusDisplay"
// import { RESTAURANT_LIST } from "../../utils/mockData";


const Body = () => {

    const onlineStatus = useOnlineStatus();
    const { OriginalRestaurantList, resDataList, SetOriginalRestaurantList, setResDataList } = useRestaurantList();

    //Checking online status 

    if (onlineStatus === false) {
        return (<OnlineStatusDisplay />)
    }

    //Render shimmer UI until data is fetched(ternary operator)

    return OriginalRestaurantList.length === 0 ?
        (<div className="shimmer-container">
            {
                Array(16).fill(0).map((_, index) => (
                    <Shimmer key={index} />
                ))
            }
        </div>)
        :
        (<div className="body-container ">
            <div className="filter-container p-4 m-4 flex gap-3">
                <input className="input-box px-4 py-2 border border-solid border-black " placeholder="Search"
                    onChange={(e) => {
                        if (e.target.value != '') {
                            const filteredResData = OriginalRestaurantList.filter((res) =>
                                ((res.card.card.info.name).toLowerCase()).includes((e.target.value).toLowerCase()));
                            setResDataList(filteredResData);
                        }
                        else {
                            setResDataList(OriginalRestaurantList);
                        }
                    }}>

                </input>

                <button className="top-rated-btn px-4 py-2 bg-gray-100 rounded-lg border border-solid border-gray hover:bg-gray-200" onClick={() => {
                    const topRatedResData = OriginalRestaurantList.filter((res) => (res.card.card.info.avgRating >= 4.5));

                    setResDataList(topRatedResData);
                }}>
                    TOP RATED RESTAURANTS
                </button>

            </div>
            <div className="items-containe flex flex-wrap justify-center">
                {
                    resDataList.map((restaurant) => {
                        {/* console.log(restaurant); */ }
                        return (
                            <Link to={"/restaurants/" + restaurant.card.card.info.id} key={restaurant.card.card.info.id}>
                                <Restaurant resData={restaurant} /></Link>);

                    })
                }
            </div>
        </div>);
}

export default Body;