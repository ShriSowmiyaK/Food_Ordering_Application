import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../src/components/Body";
import { Provider } from "react-redux";
import CartStore from "../utils/CartStore";
import { BrowserRouter } from "react-router";
import { data } from "../__mocks__/RestaurantDataList";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    })
});

it("should render the Body component with search", () => {
    render(<BrowserRouter>
        <Provider store={CartStore}>
            <Body />
        </Provider>
    </BrowserRouter>);
})