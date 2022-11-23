import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("renders correctly", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByText("Gifts for luxury lovers")).toBeInTheDocument();
    expect(screen.getByText(/go to shop/i)).toBeInTheDocument();
  });
});
