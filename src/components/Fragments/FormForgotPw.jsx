import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormForgotPw = () => {
  return (
    <form action="">
      <div className="text-center">
        <h1 className=" text-black font-bold"> Forgot Password?</h1>
      </div>
      <div className="text-center mt-4 mb-3">
        <p className="text-sm text-gray-500">
          Enter your email address to get the <br /> password reset link.
        </p>
      </div>
      <div className="mt-4 mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <Button variant="bg-primary w-full text-white" type="submit">
        Password Reset
      </Button>
      <div className="mb-3">
        <Link
          to="/login"
          className="text-sm flex justify-center mt-4 text-gray-500 font-semibold"
        >
          Back to login
        </Link>
      </div>
    </form>
  );
};

export default FormForgotPw;
