import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

describe("Nav component", () => {
  it("renders correctly", () => {
    render(<Nav />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole("heading", {
        name: /\. gifta/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });
});
