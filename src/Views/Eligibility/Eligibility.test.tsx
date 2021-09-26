import { render } from "@testing-library/react";
import React from "react";
import Eligibility from "./Eligibility";
describe("should validate Eligibility", () => {
  it("Should validate snapshot", () => {
    const { baseElement } = render(<Eligibility />);
    expect(baseElement).toMatchSnapshot();
  });
});
