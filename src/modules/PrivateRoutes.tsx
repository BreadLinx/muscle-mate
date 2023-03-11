import { Outlet, Navigate, useLocation } from "react-router-dom";
import { FC } from "react";
import { useAuth } from "store";

export const PrivateRoutes: FC = () => {
  const isUserAuthorized = useAuth(state => state.isUserAuthorized);
  const location = useLocation();

  if (isUserAuthorized === undefined) {
    return null;
  }

  return isUserAuthorized ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} to="/login" />
  );
};
