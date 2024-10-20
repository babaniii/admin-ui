import FormSignIn from "../components/Fragments/FormSignIn";
import Authlayout from "../components/Layouts/AuthLayout";

const SignInPage = () => {
  return (
    <Authlayout type="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;
