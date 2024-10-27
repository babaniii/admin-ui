import Authlayout from "../components/Layouts/AuthLayout";
import FormForgotPw from "../components/Fragments/FormForgotPw";

const ForgotPasswordPage = () => {
  return (
    <Authlayout type="forgot-password">
      <FormForgotPw />
    </Authlayout>
  );
};

export default ForgotPasswordPage;
