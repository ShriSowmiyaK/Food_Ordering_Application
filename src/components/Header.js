import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../../assests/images/logo.png";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [btnName, setBtnName] = useState("LOGIN");
    return (
        <div className="header-container">
            <img className="logo" alt="logo image" src={logo} />
            <div className="links">
                <div className="online-status link">
                    ONLINE STATUS : {onlineStatus ? '✅' : '🔴'}
                </div>

                <div className="about link">
                    <Link to="/about"> ABOUT </Link>
                </div>
                <div className="home link">
                    <Link to="/"> HOME </Link>
                </div>
                <div className="contact link">
                    <Link to="/contact"> CONTACT </Link>
                </div>
                <button className="login-logout" onClick={() => {
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