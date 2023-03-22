import { AddNewExerciseButton } from "../components/AddNewExerciseButton";
import styled from "styled-components";
import { Select } from "ui/Select";
import { useState } from "react";
import { ExerciseCard } from "../components/ExerciseCard";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 20px;
`;

const musclesDrawerElementList = [
  "Chest",
  "Back",
  "Abs & Core",
  "Neck",
  "Legs & Glutes",
  "Shoulders",
  "Arms",
];

export const SetupDaySection = () => {
  const [musclesSelectValue, setMusclesSelectValue] = useState("");

  return (
    <StyledSection>
      <Select
        placeholder="Select muscles"
        drawerInitialList={musclesDrawerElementList}
        multichoice
        inputValue={musclesSelectValue}
        setInputValue={setMusclesSelectValue}
      />
      <ExerciseCard />
      <AddNewExerciseButton />
    </StyledSection>
  );
};
