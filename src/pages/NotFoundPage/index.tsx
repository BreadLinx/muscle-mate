import styled from "@emotion/styled";
import { MainLayout } from "layouts/MainLayout";
import { DayStates } from "pages/WorkoutsPage/components/WorkoutDay";
import { useMemo, FC } from "react";
import { useAuth } from "store/authStore";

export const NotFoundPage: FC = () => {
  return <MainLayout title="Page not found" titleFont={30}></MainLayout>;
};
