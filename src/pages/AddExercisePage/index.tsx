import styled from "styled-components";
import { ExercisesLayout } from "layouts/ExercisesLayout";
import { AddExerciseForm } from "pages/AddExercisePage/modules/AddExerciseForm";

export const AddExercisePage = () => {
  return (
    <ExercisesLayout>
      <AddExerciseForm />
    </ExercisesLayout>
  );
};
