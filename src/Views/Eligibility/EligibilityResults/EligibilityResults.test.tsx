import { render } from "@testing-library/react";
import React from "react";
import EligibilityResults from "./EligibilityResults";

describe("Should Validate EligibilityResults Component", () => {
  it("Should validate eligibilityResult With Valid C1 and C2", () => {
    const eligibilityResult = {
      cardType: ["C1", "C2"],
      eligibility: {
        C1: { isEligible: true },
        C2: { isEligible: true },
      },
    };
    const { container, baseElement } = render(
      <EligibilityResults eligibilityResult={eligibilityResult} />
    );
    expect(baseElement).toMatchSnapshot();
    expect(container.textContent).toBe(
      "Congratulations you are eligible for C1 and C2 credit card product."
    );
  });
  it("Should validate eligibilityResult With Valid C1 only", () => {
    const eligibilityResult = {
      cardType: ["C1", "C2"],
      eligibility: {
        C1: { isEligible: true },
        C2: { isEligible: false },
      },
    };
    const { container, baseElement } = render(
      <EligibilityResults eligibilityResult={eligibilityResult} />
    );
    expect(baseElement).toMatchSnapshot();
    expect(container.textContent).toBe(
      "Congratulations you are eligible for C1 credit card product."
    );
  });
  it("Should validate eligibilityResult With Valid C2 only", () => {
    const eligibilityResult = {
      cardType: ["C1", "C2"],
      eligibility: {
        C1: { isEligible: false },
        C2: { isEligible: true },
      },
    };

    const { container, baseElement } = render(
      <EligibilityResults eligibilityResult={eligibilityResult} />
    );
    expect(baseElement).toMatchSnapshot();
    expect(container.textContent).toBe(
      "Congratulations you are eligible for C2 credit card product."
    );
  });
  it("Should validate eligibilityResult With in Valid C1 and C2", () => {
    const eligibilityResult = {
      cardType: ["C1", "C2"],
      eligibility: {
        C1: { isEligible: false },
        C2: { isEligible: false },
      },
    };
    const { container, baseElement } = render(
      <EligibilityResults eligibilityResult={eligibilityResult} />
    );
    expect(baseElement).toMatchSnapshot();
    expect(container.textContent).toBe(
      "Sorry! You are not eligible for neither C1 nor C2."
    );
  });
  it("Should validate error response from downstream", () => {
    const eligibilityResult = {
      error: { message: "Internal server error." },
    };
    const { container, baseElement } = render(
      <EligibilityResults eligibilityResult={eligibilityResult} />
    );
    expect(baseElement).toMatchSnapshot();
    expect(container.textContent).toBe(
      "Sorry! Currently we are unable to precess your request."
    );
  });
});
