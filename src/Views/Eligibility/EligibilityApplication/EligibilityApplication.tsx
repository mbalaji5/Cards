import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import FormInput from "../../../DesignSystem/Form/FormInput";
import SubmitButton from "../../../DesignSystem/Form/SubmitButton";
import Title from "../../../DesignSystem/Title";
import Error from "../../Error/Error";

import { IEligibilityRequest } from "../../../DataModel/eligibility/eligibility";

const FormWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

interface FormValues {
  name: string;
  email: string;
  address: string;
}
interface propType {
  eligibilityCheckHandler: (reqData: IEligibilityRequest) => {};
}

const EligibilityApplication = (props: propType) => {
  const [errorMessage, setErrorMessage] = useState("");
  const { handleChange, handleSubmit, values } = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    onSubmit: (values) => {
      if (!values.name || !values.email || !values.address) {
        setErrorMessage("Please fill all the fields!");
      } else {
        props.eligibilityCheckHandler(values);
        setErrorMessage("");
      }
    },
  });
  return (
    <FormWrapper>
      <Title>Cards</Title>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          id="name"
          data-testid="name"
          onChange={handleChange}
          value={values.name}
          placeholder="Name"
        />
        <FormInput
          type="email"
          name="email"
          id="email"
          data-testid="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Email"
        />
        <FormInput
          type="text"
          name="address"
          id="address"
          data-testid="address"
          onChange={handleChange}
          value={values.address}
          placeholder="Address"
        />
        <SubmitButton id="submit" text="Submit" />
      </form>
      {errorMessage && <Error errorMessage={errorMessage} />}
    </FormWrapper>
  );
};

EligibilityApplication.defaultProps = { eligibilityCheckHandler: () => {} };
export default EligibilityApplication;
