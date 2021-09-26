interface propType {
  errorMessage: string;
}
const Error = ({ errorMessage }: propType) => {
  return (
    <>
      <label id="error">{errorMessage}</label>
    </>
  );
};

Error.defaultProps = { errorMessage: "error" };

export default Error;
