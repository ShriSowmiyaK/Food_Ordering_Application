import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Restaurant from "../src/components/Restaurant";
import { SwiggyPromoted } from "../src/components/Restaurant";
import { data } from "../__mocks__/RestaurantMockData";

it("should render Restaurant with props data", () => {
    render(<Restaurant resData={data} />);
    const name = screen.getByText("Cream Centre- Vegetarian Legacy Since 1958");
    expect(name).toBeInTheDocument();

})

it("should render Restaurant component with promoted label - testing hoc", () => {
    const PromotedRestaurant = SwiggyPromoted(Restaurant);
    render(<PromotedRestaurant resData={data} />);
    const label = screen.getByTestId("promoted-label");
    expect(label).toBeInTheDocument();
})