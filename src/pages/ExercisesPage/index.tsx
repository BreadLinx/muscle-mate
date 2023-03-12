import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { FormsSection } from "./modules/FormsSection";
import { ExercisesList } from "./modules/ExercisesList";

export const ExercisesPage = () => {
  return (
    <MainLayout
      title="Exercises"
      additionalLink={{
        text: "Favorites",
        path: "/favorites",
      }}
    >
      <FormsSection />
      <ExercisesList />
    </MainLayout>
  );
};
