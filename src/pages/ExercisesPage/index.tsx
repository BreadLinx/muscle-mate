import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";

export const ExercisesPage = () => {
  return (
    <MainLayout
      mainLink={{
        text: "Exercises",
        path: "/exercises",
      }}
      secondaryLink={{
        text: "Favorites",
        path: "/favorites",
      }}
    >
      <div></div>
    </MainLayout>
  );
};
