import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";
import * as api from "./api";

jest.mock("./api");

describe("App component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders correctly", async () => {
    api.getAllProductsFromApi.mockResolvedValue([
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
      },
    ]);

    api.getAllCategoriesFromApi.mockResolvedValue([
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);

    render(<App />);

    await waitFor(() => {
      screen.getByRole("navigation");
      screen.getByRole("heading", { name: /gifts for luxury lovers/i });
      screen.getByRole("contentinfo");
    });
  });

  it("should render shop component with correct products and sidebar categories", async () => {
    api.getAllProductsFromApi.mockResolvedValue([
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
      },
    ]);

    api.getAllCategoriesFromApi.mockResolvedValue([
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);

    render(<App />);

    const links = screen.getAllByRole("link", {
      name: /shop/i,
    });

    userEvent.click(links[0]);

    await waitFor(() => {
      screen.getByText(/foldsack/i);
      screen.getByText(/jewelery/i);
    });

    expect(api.getAllProductsFromApi).toHaveBeenCalledTimes(1);
    expect(api.getAllCategoriesFromApi).toHaveBeenCalledTimes(1);
  });
});
