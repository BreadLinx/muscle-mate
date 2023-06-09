import styled from "styled-components";
import { ExerciseCard } from "../components/ExerciseCard";
import { FC, useDeferredValue } from "react";
import { AnimatePresence } from "framer-motion";
import { IExercise } from "types";

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
  selectValue: string;
  exercises: IExercise[];
}

export const ExercisesList: FC<ExercisesListProps> = ({
  searchValue,
  selectValue,
  exercises,
}) => {
  const filteredDataBySearch = exercises.filter(item => {
    if (searchValue === "") {
      return item;
    } else {
      return item.name.toLowerCase().includes(searchValue);
    }
  });

  const filteredDataByCategory = filteredDataBySearch.filter(item => {
    if (selectValue === "") {
      return item;
    } else {
      const result = item.muscleGroups
        .map(item => {
          return item.toLowerCase();
        })
        .some(category => {
          return selectValue
            .toLowerCase()
            .split(", ")
            .some(selectCategory => {
              return category.includes(selectCategory);
            });
        });
      return result ? item : null;
    }
  });

  const renderExercises = useDeferredValue(filteredDataByCategory);

  return (
    <StyledSection>
      <StyledList>
        <AnimatePresence>
          {renderExercises.map(exercise => {
            return (
              <ExerciseCard
                cardId={exercise._id}
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
