import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

describe("Should render Card Page", () => {
  it("Should validate card Page element", () => {
    render(<App />);
    const linkElement = screen.getByText(/Cards/i);
    expect(linkElement).toBeInTheDocument();
  });
  describe("should validate APP", () => {
    it("Should validate snapshot", () => {
      const { baseElement } = render(<App />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});
