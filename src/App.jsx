import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoutes from "./pages/errorRoutes";
import ForgotPasswordPage from "./pages/ForgotPassword";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignInPage />,
      errorElement: <ErrorRoutes />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgotpw",
      element: <ForgotPasswordPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
