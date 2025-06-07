import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../src/components/RestaurantMenu";
import Cart from "../src/components/Cart";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import CartStore from "../utils/CartStore";
import { BrowserRouter } from "react-router";
import { data } from "../__mocks__/accordianData";
import { act } from "react";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    })
});

it("should render the right number of results when we click the accordian", async () => {
    await act(async () => render(<BrowserRouter >
        <Provider store={CartStore}>
            <RestaurantMenu />
        </Provider>
    </BrowserRouter >))
    const parent = screen.getByText("Recommended(20)");
    fireEvent.click(parent);
    const items = screen.getAllByTestId("items");
    expect(items.length).toBe(20);
})

it("should add the items to cart if add is clicked", async () => {
    await act(async () => render(<BrowserRouter >
        <Provider store={CartStore}>
            <Header />
            <RestaurantMenu />
        </Provider>
    </BrowserRouter >))
    const parent = screen.getByText("Recommended(20)");
    fireEvent.click(parent);
    const items = screen.getAllByTestId("items");
    const buttons = screen.getAllByTestId("add");
    fireEvent.click(buttons[0]);
    const name = screen.getByText("CART (1)");
    expect(name).toBeInTheDocument();
})

it("should add the items in cart component if add is clicked in restaurant menu component", async () => {
    await act(async () => render(<BrowserRouter >
        <Provider store={CartStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
    </BrowserRouter >))
    const parent = screen.getByText("Recommended(20)");
    fireEvent.click(parent);
    const items = screen.getAllByTestId("items");
    const buttons = screen.getAllByTestId("add");
    fireEvent.click(buttons[0]);
    expect(items.length).toBe(21);
})

it("should clear the items in cart component if empty cart button is clicked in cart component", async () => {
    await act(async () => render(<BrowserRouter >
        <Provider store={CartStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
    </BrowserRouter >))
    const parent = screen.getByText("Recommended(20)");
    fireEvent.click(parent);
    const itemsBeforeClick = screen.getAllByTestId("items");
    const buttons = screen.getAllByTestId("add");
    fireEvent.click(buttons[0]);
    const empty = screen.getByTestId("empty");
    fireEvent.click(empty);
    const itemsAfterClick = screen.getAllByTestId("items");
    expect(itemsAfterClick.length).toBe(20);
})