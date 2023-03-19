import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLocation,
} from "react-router-dom";
import {
  SettingsPage,
  LoginPage,
  ExercicesPage,
  WorkoutsPage,
  WorkoutPage,
  AddExercisePage,
} from "pages";
import { useEffect } from "react";
import { getCookie, deleteCookie } from "utils/cookies";
import { useAuth, usePosts } from "store";
import { PrivateRoutes } from "modules/PrivateRoutes";
import { SetupPage } from "pages/SetupPage";
import { ExercisesPage } from "pages/ExercisesPage";
import { FavoritesExercisesPage } from "pages/FavoritesExercisesPage";
import { NutritionPage } from "pages/NutritionPage";
import { ProfilePage } from "pages/ProfilePage";
import { SetupDayPage } from "pages/SetupDayPage";
import { AnimatePresence } from "framer-motion";
import { SignInPage } from "pages/SignInPage";
import { SignUpPage } from "pages";
import styled from "styled-components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WorkoutsPage />} />
      <Route path="/setupplan" element={<SetupPage />} />
      <Route path="/setupplan/:day" element={<SetupDayPage />} />

      <Route path="/exercises" element={<ExercisesPage />} />
      <Route path="/favorites" element={<FavoritesExercisesPage />} />

      <Route path="/nutrition" element={<NutritionPage />} />

      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/addexercise" element={<AddExercisePage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      {/* <Route element={<PrivateRoutes />}>
        <Route path="/profile" element={<SettingsPage />} />
        <Route path="/favorites" element={<ExercicesPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/workouts/:day" element={<WorkoutPage />} />
      </Route>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/exercices" element={<ExercicesPage />} />
      <Route path="/addexercise" element={<AddExercisePage />} />
      <Route path="*" element={<p>404</p>} /> */}
    </>,
  ),
);

const StyledMobileContainer = styled.div``;

export const App = () => {
  const { getMe, setUserAuthorizedFalse } = useAuth(state => state);
  const getPosts = usePosts(state => state.getPosts);

  useEffect(() => {
    if (getCookie("authToken")) {
      getMe();
    } else {
      setUserAuthorizedFalse();
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};
