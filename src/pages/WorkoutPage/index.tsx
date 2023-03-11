import styled from "styled-components";
import { ExercisesLayout } from "layouts/ExercisesLayout";
import { useParams } from "react-router-dom";
import { WorkoutSection } from "./modules/WorkoutSection";

export const WorkoutPage = () => {
  const { day } = useParams();

  return (
    <ExercisesLayout>
      <WorkoutSection />
    </ExercisesLayout>
  );
};
