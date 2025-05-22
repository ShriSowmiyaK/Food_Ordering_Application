import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [btnName, setBtnName] = useState("LOGIN");
    return (
        <div className="flex justify-between bg-yellow-100 shadow-lg px-4">
            <img className="w-28 h-28" alt="logo image" src={logo} />
            <div className="flex items-center">
                <div className="px-4">
                    ONLINE STATUS : {onlineStatus ? '✅' : '🔴'}
                </div>
                <div className="px-4">
                    <Link to="/"> HOME </Link>
                </div>
                <div className="px-4">
                    <Link to="/about"> ABOUT </Link>
                </div>

                <div className="px-4">
                    <Link to="/contact"> CONTACT </Link>
                </div>
                <div className="px-4">
                    <Link to="/grocery"> GROCERY </Link>
                </div>
                <button className="px-4" onClick={() => {
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