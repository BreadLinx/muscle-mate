import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { WorkoutWeek } from "pages/WorkoutsPage/modules/WorkoutWeek";

export const SetupPage = () => {
  return (
    <MainLayout
      mainLink={{
        text: "Set up plan",
        path: "/setupplan",
      }}
      secondaryLink={{
        text: "Workouts",
        path: "/",
      }}
    >
      <WorkoutWeek />
    </MainLayout>
  );
};
