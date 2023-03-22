import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { useAuth } from "store/authStore";
import { FormsSection } from "pages/ExercisesPage/modules/FormsSection";
import { ExercisesList } from "pages/ExercisesPage/modules/ExercisesList";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export const MyOwnExercisesPage = () => {
  const userExercises = useAuth(state => state.userExercises);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchValue(lowerCase);
  };

  return (
    <MainLayout
      title="My own"
      additionalLink={{
        text: "Exercises",
        path: "/exercises",
      }}
      endIcon={<AddIcon />}
      onIconClick={() => {
        navigate("/addexercise");
      }}
    >
      <FormsSection
        searchValue={searchValue}
        handleSearch={handleSearchChange}
      />
      <ExercisesList searchValue={searchValue} exercises={userExercises} />
    </MainLayout>
  );
};
