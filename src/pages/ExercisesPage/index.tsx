import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { FormsSection } from "./modules/FormsSection";
import { ExercisesList } from "./modules/ExercisesList";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";

export const ExercisesPage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchValue(lowerCase);
  };

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
      <FormsSection
        searchValue={searchValue}
        handleSearch={handleSearchChange}
      />
      <ExercisesList searchValue={searchValue} />
    </MainLayout>
  );
};
