import { MainLayout } from "layouts/MainLayout";
import { FormsSection } from "./modules/FormsSection";
import { ExercisesList } from "./modules/ExercisesList";
import { useState, ChangeEvent, useEffect } from "react";
import { useExercises } from "store/exercisesStore";

export const ExercisesPage = () => {
  const { exercises, getExercises } = useExercises(state => state);
  const [searchValue, setSearchValue] = useState("");
  const [musclesSelectValue, setMusclesSelectValue] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchValue(lowerCase);
  };

  useEffect(() => {
    getExercises();
  }, []);

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
