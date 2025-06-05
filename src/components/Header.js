import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../../assets/images/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [btnName, setBtnName] = useState("LOGIN");
    const count = useSelector((store) => store.cart.count);

    return (
        <div data-testid="Header" className="flex justify-between bg-yellow-100 shadow-lg px-4">
            <img className="w-28 h-28" alt="logo image" src={logo} />
            <div className="flex items-center">
                <div className="px-4 font-bold">
                    ONLINE STATUS : {onlineStatus ? '✅' : '🔴'}
                </div>
                <div className="px-4 font-bold">
                    <Link to="/"> HOME </Link>
                </div>
                <div className="px-4 font-bold">
                    <Link to="/about"> ABOUT </Link>
                </div>

                <div className="px-4 font-bold">
                    <Link to="/contact"> CONTACT </Link>
                </div>
                <div className="px-4 font-bold">
                    <Link to="/grocery"> GROCERY </Link>
                </div>
                <div className="px-4 font-bold">
                    <Link to="/cart"> CART ({count}) </Link>
                </div>
                <button className="px-4 font-bold" onClick={() => {
                    btnName === 'LOGIN' ? setBtnName('LOGOUT') : setBtnName('LOGIN');
                }}
                >
                    {btnName}
                </button>
            </div>

        </div>
    );
}

export default Header;