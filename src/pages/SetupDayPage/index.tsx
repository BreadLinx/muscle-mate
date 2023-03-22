import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";
import { useParams } from "react-router-dom";
import { SetupDaySection } from "./modules/SetupDaySection";
import { useAuth } from "store";

export const SetupDayPage = () => {
  const { day } = useParams() as { day: "monday" | "tuesday" | "wednesday" };
  const titleFont = day === "wednesday" ? 29 : 32;
  const workouts = useAuth(state => state.workouts);
  const properDay = workouts && workouts[day];

  return (
    <WithoutBottomNavigation
      title={`Set up ${day}`}
      titleFont={titleFont}
      arrowPath="/setupplan"
    >
      <SetupDaySection
        muscleName={properDay!.name}
        dayExercises={properDay!.exercises}
      />
    </WithoutBottomNavigation>
  );
};
