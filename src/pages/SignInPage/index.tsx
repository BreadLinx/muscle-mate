import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";

import { SignInForm } from "./modules/SignInForm";

export const SignInPage = () => {
  return (
    <MainLayout title="Sign in">
      <SignInForm />
    </MainLayout>
  );
};
