import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/components/Header"
import { Provider } from "react-redux";
import CartStore from "../utils/CartStore";
import { BrowserRouter } from "react-router";

describe("should test the header component", () => {
    it("should load the header component", () => {
        render(
            <BrowserRouter>
                <Provider store={CartStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const header_render = screen.getByTestId("Header");
        expect(header_render).toBeInTheDocument();
    })
    it("should check if cart items are 0 when header component is loaded", () => {
        render(<BrowserRouter>
            <Provider store={CartStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );
        const cart_count = screen.getByText("CART (0)");
        expect(cart_count).toBeInTheDocument();
    })
})
