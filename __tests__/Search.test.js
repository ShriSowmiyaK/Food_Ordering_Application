import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../src/components/Body";
import { Provider } from "react-redux";
import CartStore from "../utils/CartStore";
import { BrowserRouter } from "react-router";
import { data } from "../__mocks__/RestaurantDataList";
import { act } from "react";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    })
});

it("should render the Body component with right results when searching is done", async () => {
    await act(async () => render(<BrowserRouter >
        <Provider store={CartStore}>
            <Body />
        </Provider>
    </BrowserRouter >))
    const input = screen.getByTestId("search");
    fireEvent.change(input, { target: { value: "Pizza Hut" } });
    const cardsAfterSearch = screen.getByTestId("cards");
    expect(cardsAfterSearch.children.length).toBe(1);
})

it("should render the Body component with all restaurant cards rendered", async () => {
    await act(async () => render(<BrowserRouter >
        <Provider store={CartStore}>
            <Body />
        </Provider>
    </BrowserRouter >))
    const cardsBeforeSearch = screen.getByTestId("cards");
    expect(cardsBeforeSearch.children.length).toBe(21);
})

it("should render the Body component with right results when top rated restaurant button is clicked", async () => {
    await act(async () => render(<BrowserRouter >
        <Provider store={CartStore}>
            <Body />
        </Provider>
    </BrowserRouter >))
    const topRated = screen.getByTestId("top-rated");
    fireEvent.click(topRated);
    const cardsAfterClick = screen.getByTestId("cards");
    expect(cardsAfterClick.children.length).toBe(8);
})

it("should render the Body component with right number of Promoted restaurants with label", async () => {
    await act(async () => render(<BrowserRouter >
        <Provider store={CartStore}>
            <Body />
        </Provider>
    </BrowserRouter >))
    const label = screen.getAllByText("Promoted");
    expect(label.length).toBe(3);
})