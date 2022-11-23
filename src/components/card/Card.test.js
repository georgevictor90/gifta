import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";
import userEvent from "@testing-library/user-event";

describe("Card component", () => {
  it("renders correctly with props", () => {
    render(<Card price="325" title="Mens Casual T-shirt" />);

    expect(screen.getByAltText("Mens Casual T-shirt")).toBeInTheDocument();

    expect(screen.getByText("325 EUR")).toBeInTheDocument();

    expect(screen.getByText("Mens Casual T-shirt")).toBeInTheDocument();

    expect(screen.queryByText("Womens Casual T-shirt")).toBeNull();

    expect(
      screen.getByRole("button", { name: "Add to cart" })
    ).toBeInTheDocument();
  });
  it("calls onClick correct number of times", () => {
    const onClickMock = jest.fn();
    render(<Card addToCart={onClickMock} />);
    const addToCartBtn = screen.getByRole("button", { name: "Add to cart" });

    userEvent.click(addToCartBtn);
    userEvent.click(addToCartBtn);
    expect(onClickMock).toHaveBeenCalledTimes(2);
  });
});
