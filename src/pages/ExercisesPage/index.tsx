import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { FormsSection } from "./modules/FormsSection";
import { ExercisesList } from "./modules/ExercisesList";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const ExercisesPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Exercises"
      additionalLink={{
        text: "Favorites",
        path: "/favorites",
      }}
      endIcon={<AddIcon />}
      onIconClick={() => {
        navigate("/addexercise");
      }}
    >
      <FormsSection />
      <ExercisesList />
    </MainLayout>
  );
};
