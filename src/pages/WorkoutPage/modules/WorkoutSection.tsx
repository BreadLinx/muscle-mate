import { FC } from "react";
import styled from "styled-components";
import { ExerciseCard } from "../components/ExerciseCard";
import { useAuth } from "store";
import { useParams } from "react-router-dom";
import { Tdays } from "types";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  align-items: center;
`;

export const WorkoutSection: FC = () => {
  const { day } = useParams() as { day: Tdays };
  const workouts = useAuth(state => state.workouts);
  const exercises = workouts && workouts[day].exercises;

  return (
    <StyledSection>
      {exercises.map(exercise => {
        return <ExerciseCard key={exercise._id} exercise={exercise} />;
      })}
    </StyledSection>
  );
};
