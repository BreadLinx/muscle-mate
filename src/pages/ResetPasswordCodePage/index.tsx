import styled from "styled-components";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "store/authStore";
import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";

export const ResetPasswordCodePage = () => {
  const { state } = useLocation();
  const { name } = useAuth(state => state);

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <WithoutBottomNavigation
      title="Reset password"
      withOutBottomButton
    ></WithoutBottomNavigation>
  );
};
