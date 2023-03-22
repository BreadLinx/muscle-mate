import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { SignUpForm } from "./modules/SignUpForm";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "store/authStore";
import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";

export const SignUpPage = () => {
  const { state } = useLocation();
  const { name } = useAuth(state => state);

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <WithoutBottomNavigation title="Sign up" withOutBottomButton>
      <SignUpForm />
    </WithoutBottomNavigation>
  );
};
