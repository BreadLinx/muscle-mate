import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  SettingsPage,
  SignupPage,
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WorkoutsPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/profile" element={<SettingsPage />} />
        <Route path="/favorites" element={<ExercicesPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/workouts/:day" element={<WorkoutPage />} />
      </Route>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/exercices" element={<ExercicesPage />} />
      <Route path="/addexercise" element={<AddExercisePage />} />
      <Route path="*" element={<p>404</p>} />
    </>,
  ),
);

export const App = () => {
  const { getMe, setUserAuthorizedFalse } = useAuth(state => state);
  const getPosts = usePosts(state => state.getPosts);

  useEffect(() => {
    getPosts(0);

    if (getCookie("authToken")) {
      getMe();
    } else {
      setUserAuthorizedFalse();
    }
  }, []);

  return <RouterProvider router={router} />;
};
