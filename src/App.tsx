import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";

import {
  WorkoutsPage,
  WorkoutPage,
  SetupPage,
  SetupDayPage,
  ExercisesPage,
  MyOwnExercisesPage,
  NutritionPage,
  SignInPage,
  SignUpPage,
  AddExercisePage,
  ProfilePage,
  ChooseExercisePage,
  ResetPasswordPage,
  ResetPasswordCodePage,
  NotFoundPage,
} from "pages";

import { getCookie, deleteCookie } from "utils/cookies";
import { getExercisesRequest } from "utils/api";

import { useAuth, useExercises } from "store";
import { PrivateRoutes } from "modules/PrivateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="/resetpasswordcode" element={<ResetPasswordCodePage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/" element={<WorkoutsPage />} />
        <Route path="/:day" element={<WorkoutPage />} />

        <Route path="/setupplan" element={<SetupPage />} />
        <Route path="/setupplan/:day" element={<SetupDayPage />} />
        <Route
          path="/setupplan/:day/chooseexercise"
          element={<ChooseExercisePage />}
        />

        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/myownexercises" element={<MyOwnExercisesPage />} />
        <Route path="/addexercise" element={<AddExercisePage />} />

        <Route path="/nutrition" element={<NutritionPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

export const App = () => {
  const { getMe, setUserAuthorizedFalse } = useAuth(state => state);
  const getExercises = useExercises(state => state.getExercises);

  useEffect(() => {
    getExercises();

    if (getCookie("authToken")) {
      getMe();
    } else {
      setUserAuthorizedFalse();
    }
  }, []);

  return <RouterProvider router={router} />;
};
