import { fireEvent, render, act } from "@testing-library/react";
import React from "react";
import EligibilityApplication from "./EligibilityApplication";

describe("Should Validate EligibilityApplication Component", () => {
  it("Should validate eligibilityResult With Valid C1 and C2", () => {
    const eligibilityResult = {
      cardType: ["C1", "C2"],
      eligibility: {
        C1: { isEligible: true },
        C2: { isEligible: true },
      },
    };

    const { container, baseElement } = render(
      <EligibilityApplication eligibilityCheckHandler={() => jest.fn()} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
