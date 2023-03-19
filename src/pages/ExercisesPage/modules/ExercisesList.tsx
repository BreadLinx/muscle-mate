import styled from "styled-components";
import { ExerciseCard } from "../components/ExerciseCard";
import { useEffect, useState, ChangeEvent, FC } from "react";
import { useExercises } from "store/exercisesStore";
import { AnimatePresence } from "framer-motion";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  height: calc(100vh - 245.6px);
  margin-top: 10px;
  overflow-y: overlay;
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

interface ExercisesListProps {
  searchValue: string;
}

export const ExercisesList: FC<ExercisesListProps> = ({ searchValue }) => {
  const { getExercises, exercises } = useExercises(state => state);

  useEffect(() => {
    getExercises();
  }, []);

  const filteredData = exercises.filter(item => {
    if (searchValue === "") {
      return item;
    }
    //return the item which contains the user input
    else {
      return item.name.toLowerCase().includes(searchValue);
    }
  });

  return (
    <StyledSection>
      <StyledList>
        <AnimatePresence>
          {filteredData.map(exercise => {
            return (
              <ExerciseCard
                key={exercise._id}
                image={exercise.image}
                title={exercise.name}
                groups={exercise.muscleGroups}
                description={exercise.description}
              />
            );
          })}
        </AnimatePresence>
      </StyledList>
    </StyledSection>
  );
};
