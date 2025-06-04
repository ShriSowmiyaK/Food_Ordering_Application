import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import CartStore from "../utils/CartStore";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => (
    <div className="app-container">
        <Provider store={CartStore}>
            <Header />
            <Outlet />
        </Provider>
    </div >

);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [{
            path: "/",
            element: <Body />,
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurants/:resid",
            element: <RestaurantMenu />,
        },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
