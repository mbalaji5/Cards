import { IResponse } from "../../DataModel/common";
import {
  IcardEligibility,
  IEligibilityRequest,
} from "../../DataModel/eligibility/eligibility";
import http from "../common";

export const postEligibility = async (reqBody: IEligibilityRequest) => {
  return await http
    .post<IResponse<IcardEligibility>>("/eligibility/check", reqBody)
    .then((data) => data.data)
    .catch((error) => error.response.data);
};
