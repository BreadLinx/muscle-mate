import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";

export const FavoritesExercisesPage = () => {
  return (
    <MainLayout
      title="Favorites"
      additionalLink={{
        text: "Exercises",
        path: "/exercises",
      }}
    >
      <div></div>
    </MainLayout>
  );
};
