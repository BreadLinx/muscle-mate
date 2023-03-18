import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { AddExerciseForm } from "./modules/AddExerciseForm";

export const AddExercisePage = () => {
  return (
    <MainLayout title="Add new exercise" titleFont={30} arrowPath="/exercises">
      <AddExerciseForm />
    </MainLayout>
  );
};
