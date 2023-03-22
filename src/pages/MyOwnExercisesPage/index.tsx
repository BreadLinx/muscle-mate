import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { useAuth } from "store/authStore";
import { FormsSection } from "pages/ExercisesPage/modules/FormsSection";
import { ExercisesList } from "pages/ExercisesPage/modules/ExercisesList";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export const MyOwnExercisesPage = () => {
  const navigate = useNavigate();
  const userExercises = useAuth(state => state.userExercises);
  const [searchValue, setSearchValue] = useState("");
  const [musclesSelectValue, setMusclesSelectValue] = useState("");

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
        selectValue={musclesSelectValue}
        setSelectValue={setMusclesSelectValue}
      />
      <ExercisesList
        searchValue={searchValue}
        selectValue={musclesSelectValue}
        exercises={userExercises}
      />
    </MainLayout>
  );
};
