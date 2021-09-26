import React, { useState } from "react";
import { IResponse } from "../../DataModel/common";
import {
  IcardEligibility,
  IEligibilityRequest,
} from "../../DataModel/eligibility/eligibility";
import View from "../../DesignSystem/View";
import { postEligibility } from "../../Service/Eligibility";
import EligibilityApplication from "./EligibilityApplication";
import EligibilityResults from "./EligibilityResults";

const Eligibility = () => {
  const [eligibilityResult, setEligibilityResult] =
    useState<IResponse<IcardEligibility>>();

  const eligibilityCheckHandler = (reqData: IEligibilityRequest): void => {
    postEligibility(reqData).then((res) => {
      setEligibilityResult(res);
    });
  };

  return (
    <View>
      <EligibilityApplication
        eligibilityCheckHandler={async (reqData) =>
          eligibilityCheckHandler(reqData)
        }
      />
      <EligibilityResults eligibilityResult={eligibilityResult} />
    </View>
  );
};

export default Eligibility;
