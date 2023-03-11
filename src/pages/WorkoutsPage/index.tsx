import styled from "@emotion/styled";
import { WorkoutWeek } from "./modules/WorkoutWeek";
import { MainLayout } from "layouts/MainLayout";

export const WorkoutsPage = () => {
  return (
    <MainLayout
      mainLink={{
        text: "Workouts",
        path: "/",
      }}
      secondaryLink={{
        text: "Set up plan",
        path: "/setupplan",
      }}
    >
      <WorkoutWeek />
    </MainLayout>
  );
};
