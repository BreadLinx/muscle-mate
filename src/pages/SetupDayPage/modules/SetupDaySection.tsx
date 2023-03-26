import { AddNewExerciseButton } from "../components/AddNewExerciseButton";
import styled from "styled-components";
import { Select } from "ui/Select";
import { useState, FC } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { IUserWorkoutExercise } from "types";
import { useAuth, useExercises } from "store";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 20px;
  padding-bottom: 95px;
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

interface SetupDaySectionProps {
  dayExercises?: IUserWorkoutExercise[];
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SetupDaySection: FC<SetupDaySectionProps> = ({
  dayExercises,
  selectValue,
  setSelectValue,
}) => {
  return (
    <StyledSection>
      <Select
        placeholder="Select muscles"
        drawerInitialList={musclesDrawerElementList}
        inputValue={selectValue}
        setInputValue={setSelectValue}
      />
      {dayExercises &&
        dayExercises.map((exercise, index) => {
          return (
            <ExerciseCard
              key={exercise._id + exercise.exerciseId}
              exercise={exercise}
              cardIndex={index}
            />
          );
        })}

      <AddNewExerciseButton />
    </StyledSection>
  );
};
