import styled from "styled-components";
import { ExerciseCard } from "pages/ExercisesPage/components/ExerciseCard";
import { AnimatePresence } from "framer-motion";
import { FC, useDeferredValue, useState } from "react";
import { useExercises, useAuth } from "store";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  margin-top: 10px;

  padding-bottom: 95px;
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

interface ContentSectionProps {
  searchValue: string;
  musclesselectValue: string;
  typeSelectValue: string;
  checked: string;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
}

export const ContentSection: FC<ContentSectionProps> = ({
  searchValue,
  musclesselectValue,
  typeSelectValue,
  checked,
  setChecked,
}) => {
  const commonExercises = useExercises(state => state.exercises);
  const userExercises = useAuth(state => state.userExercises);

  const exercises =
    typeSelectValue === ""
      ? [...userExercises, ...commonExercises]
      : typeSelectValue === "My own added"
      ? [...userExercises]
      : [...commonExercises];

  const filteredDataBySearch = exercises.filter(item => {
    if (searchValue === "") {
      return item;
    } else {
      return item.name.toLowerCase().includes(searchValue);
    }
  });

  const filteredDataByCategory = filteredDataBySearch.filter(item => {
    if (musclesselectValue === "") {
      return item;
    } else {
      const result = item.muscleGroups
        .map(item => {
          return item.toLowerCase();
        })
        .some(category => {
          return musclesselectValue
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
                handleClick={() => {
                  setChecked(exercise._id);
                }}
                cardId={exercise._id}
                key={exercise._id}
                image={exercise.image}
                title={exercise.name}
                groups={exercise.muscleGroups}
                checked={checked}
                description={exercise.description}
              />
            );
          })}
        </AnimatePresence>
      </StyledList>
    </StyledSection>
  );
};
