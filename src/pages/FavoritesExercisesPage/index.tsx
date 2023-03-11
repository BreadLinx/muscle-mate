import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";

export const FavoritesExercisesPage = () => {
  return (
    <MainLayout
      mainLink={{
        text: "Favorites",
        path: "/favorites",
      }}
      secondaryLink={{
        text: "Exercises",
        path: "/exercises",
      }}
    >
      <div></div>
    </MainLayout>
  );
};
