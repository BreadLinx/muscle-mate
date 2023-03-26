import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { SignInForm } from "./modules/SignInForm";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "store/authStore";
import { BranchLayout } from "layouts/BranchLayout";

export const SignInPage = () => {
  const { state } = useLocation();
  const { name } = useAuth(state => state);

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <BranchLayout title="Sign in" submitButonOptions="hide">
      <SignInForm />
    </BranchLayout>
  );
};
