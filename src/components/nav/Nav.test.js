import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";
import { HashRouter } from "react-router-dom";
import { CartContext } from "../RouteSwitch";

describe("Nav component", () => {
  const mockContext = {
    cart: Array(3).fill({ quantity: 1 }),
    setCart: jest.fn(),
    addProductToCart: jest.fn(),
  };
  test("renders correctly", () => {
    render(
      <HashRouter>
        <CartContext.Provider value={mockContext}>
          <Nav />
        </CartContext.Provider>
      </HashRouter>
    );
    expect(
      screen.getByRole("heading", {
        name: /\. gifta/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });
  test("shows correct number of cart items", () => {
    render(
      <HashRouter>
        <CartContext.Provider value={mockContext}>
          <Nav />
        </CartContext.Provider>
      </HashRouter>
    );
    expect(screen.getByTestId("cart-badge")).toHaveTextContent(
      mockContext.cart.length
    );
  });
});
