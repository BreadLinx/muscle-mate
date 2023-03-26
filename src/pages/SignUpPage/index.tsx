import { SignUpForm } from "./modules/SignUpForm";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "store/authStore";
import { BranchLayout } from "layouts/BranchLayout";

export const SignUpPage = () => {
  const { state } = useLocation();
  const { name } = useAuth(state => state);

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <BranchLayout title="Sign up" submitButonOptions="hide">
      <SignUpForm />
    </BranchLayout>
  );
};
