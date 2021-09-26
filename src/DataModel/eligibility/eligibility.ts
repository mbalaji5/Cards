interface IEligibility {
  isEligible: boolean;
}

export interface IcardEligibility {
  eligibility: Array<IEligibility>;
  cardType: Array<string>;
}

export interface IEligibilityRequest {
  name: string;
  email: string;
  address: string;
}
