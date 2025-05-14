import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])
    return onlineStatus;
}

export default useOnlineStatus;