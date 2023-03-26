import styled from "styled-components";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "store/authStore";
// import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";
import { BranchLayout } from "layouts/BranchLayout";

export const ResetPasswordCodePage = () => {
  const { state } = useLocation();
  const { name } = useAuth(state => state);

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <BranchLayout
      title="Reset password"
      submitButonOptions="hide"
    ></BranchLayout>
  );
};
