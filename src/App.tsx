import styled from "styled-components";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

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
  LoadingPage,
} from "pages";

import { getCookie } from "utils/cookies";

import { useAuth, useExercises } from "store";
import { PrivateRoutes } from "modules/PrivateRoutes";
import { RootContainer } from "modules/RootContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="/resetpasswordcode" element={<ResetPasswordCodePage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Navigate to="/workouts" />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route
          path="/workouts"
          element={
            <RootContainer mainPath="/workouts" secondPath="/workouts/:day" />
          }
        >
          <Route index element={<WorkoutsPage />} />
          <Route path=":day" element={<WorkoutPage />} />
        </Route>

        <Route
          path="/setupplan"
          element={
            <RootContainer mainPath="/setupplan" secondPath="/setupplan/:day" />
          }
        >
          <Route index element={<SetupPage />} />
          <Route path=":day" element={<SetupDayPage />} />
          <Route path=":day/chooseexercise" element={<ChooseExercisePage />} />
        </Route>

        <Route path="/exercises" element={<ExercisesPage />} />

        <Route
          path="/exercises/my"
          element={
            <RootContainer
              mainPath="/exercises/my"
              secondPath="/exercises/my/add"
            />
          }
        >
          <Route index element={<MyOwnExercisesPage />} />
          <Route path="add" element={<AddExercisePage />} />
        </Route>

        <Route path="/nutrition" element={<NutritionPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

const AppWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
`;

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

  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  );
};
