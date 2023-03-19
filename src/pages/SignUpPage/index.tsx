import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { SignUpForm } from "./modules/SignUpForm";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "store/authStore";

export const SignUpPage = () => {
  const { state } = useLocation();
  const { name } = useAuth(state => state);

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <MainLayout title="Sign up">
      <SignUpForm />
    </MainLayout>
  );
};
