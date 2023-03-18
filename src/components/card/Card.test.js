import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";
import userEvent from "@testing-library/user-event";
import { CartContext } from "../RouteSwitch";
import { ProductsContext } from "../shop/Shop";
import { HashRouter } from "react-router-dom";

describe("Card component", () => {
  const mockCartContext = {
    addProductToCart: jest.fn(),
  };

  const mockProductsContext = {
    favorites: [{ id: 1, favorite: true }],
    setFavorites: jest.fn(),
    allProducts: [],
  };

  const mockProduct = { id: 1, image: "", title: "My Product", price: 10 };

  test("renders correctly with props", () => {
    render(
      <HashRouter>
        <ProductsContext.Provider value={mockProductsContext}>
          <CartContext.Provider value={mockCartContext}>
            <Card product={mockProduct} />
          </CartContext.Provider>
        </ProductsContext.Provider>
      </HashRouter>
    );

    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();

    expect(screen.getByText(`${mockProduct.price} EUR`)).toBeInTheDocument();

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Add to cart" })
    ).toBeInTheDocument();
  });

  test("calls addProductToCart correct number of times", () => {
    render(
      <HashRouter>
        <ProductsContext.Provider value={mockProductsContext}>
          <CartContext.Provider value={mockCartContext}>
            <Card product={mockProduct} />
          </CartContext.Provider>
        </ProductsContext.Provider>
      </HashRouter>
    );

    const addToCartBtn = screen.getByRole("button", { name: "Add to cart" });
    userEvent.click(addToCartBtn);
    userEvent.click(addToCartBtn);
    expect(mockCartContext.addProductToCart).toHaveBeenCalledTimes(2);
  });
});
