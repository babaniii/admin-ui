import Authlayout from "../components/Layouts/AuthLayout";
import FormForgotPw from "../components/Fragments/FormForgotPw";

const ForgotPasswordPage = () => {
  return (
    <Authlayout type="forgot-password" showForgotPassword={false} 
    showSignInWith={false} 
    showSignInWithGoogle={false} 
    showAccountLink={false}>
      <FormForgotPw />
    </Authlayout>
  );
};

export default ForgotPasswordPage;
