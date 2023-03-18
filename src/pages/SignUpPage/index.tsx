import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";

import { SignUpForm } from "./modules/SignUpForm";

export const SignUpPage = () => {
  return (
    <MainLayout title="Sign up">
      <SignUpForm />
    </MainLayout>
  );
};
