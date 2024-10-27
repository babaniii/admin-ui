import Authlayout from "../components/Layouts/AuthLayout";
import LabeledInput from "../components/Elements/LabeledInput";
import Button from "../components/Elements/Button";

const ForgotPasswordPage = () => {
  return (
    <Authlayout type="forgot-password">
      <h2>Forgot Password?</h2>
      <p>Enter your email address to get the password reset link.</p>
      <LabeledInput label="Email Address" placeholder="hello@example.com" />
      <Button>Reset Password</Button>
      <p>
        <a>Back to login</a>
      </p>
    </Authlayout>
  );
};

export default ForgotPasswordPage;
