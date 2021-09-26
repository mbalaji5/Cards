import { render } from "@testing-library/react";
import React from "react";

import Error from "./Error";
const errorMessage = "Sorry you are not eligible for neither C1 nor C2.";
describe("Should Validate Error Component", () => {
  it("Should validate default param", () => {
    const { container } = render(<Error />);
    expect(container.textContent).toBe("error");
  });
  it("Should validate props", () => {
    const { container } = render(<Error errorMessage={errorMessage} />);
    expect(container.textContent).toBe(errorMessage);
  });
  it("should match snopshot", () => {
    const { baseElement } = render(<Error />);
    expect(baseElement).toMatchSnapshot();
  });
  it("should match snopshot", () => {
    const { baseElement } = render(<Error errorMessage={errorMessage} />);
    expect(baseElement).toMatchSnapshot();
  });
});
