import { MainLayout } from "layouts/MainLayout";
import { FormsSection } from "./modules/FormsSection";
import { ExercisesList } from "./modules/ExercisesList";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { useExercises } from "store/exercisesStore";

export const ExercisesPage = () => {
  const exercises = useExercises(state => state.exercises);
  const [searchValue, setSearchValue] = useState("");
  const [musclesSelectValue, setMusclesSelectValue] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchValue(lowerCase);
  };

  return (
    <MainLayout
      title="Exercises"
      additionalLink={{
        text: "My own",
        path: "/exercises/my",
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
        exercises={exercises}
      />
    </MainLayout>
  );
};
