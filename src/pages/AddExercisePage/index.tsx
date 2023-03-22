import { MainLayout } from "layouts/MainLayout";
import { AddExerciseForm } from "./modules/AddExerciseForm";

export const AddExercisePage = () => {
  return (
    <MainLayout title="Add new exercise" titleFont={30} arrowPath="/exercises">
      <AddExerciseForm />
    </MainLayout>
  );
};
