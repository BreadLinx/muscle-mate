import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { SignInForm } from "./modules/SignInForm";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "store/authStore";

export const SignInPage = () => {
  const { state } = useLocation();
  const { name } = useAuth(state => state);

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <MainLayout title="Sign in">
      <SignInForm />
    </MainLayout>
  );
};
