import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Error from "../../Error/Error";

const ResultsWrapper = styled.div`
  flex: 1 1 auto;
  padding-top: 48px;
  justify-content: center;
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
`;

interface propType {
  eligibilityResult: any;
}

const EligibilityResults = ({ eligibilityResult }: propType) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [eligibleProduct, setEligibleProduct] = useState("");

  useEffect(() => {
    if (eligibilityResult && eligibilityResult.cardType) {
      let eligibileCard = "";
      eligibilityResult.cardType.forEach((card: string) => {
        if (eligibilityResult.eligibility[card].isEligible)
          eligibileCard = eligibileCard ? `${eligibileCard} and ${card}` : card;
      });

      const eligibleProductLabel = eligibileCard
        ? `Congratulations you are eligible for ${eligibileCard} credit card product.`
        : `Sorry! You are not eligible for neither C1 nor C2.`;

      setEligibleProduct(eligibleProductLabel);
    } else if (eligibilityResult && eligibilityResult.error) {
      setErrorMessage(
        "Sorry! Currently we are unable to precess your request."
      );
    }
  }, [eligibilityResult]);

  return (
    <ResultsWrapper>
      {eligibleProduct && <label>{eligibleProduct}</label>}
      {errorMessage && <Error errorMessage={errorMessage} />}
    </ResultsWrapper>
  );
};

EligibilityResults.defaultProps = { eligibilityResult: {} };

export default EligibilityResults;
