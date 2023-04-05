import styled from "styled-components";
import { FC, useState, useRef, useEffect } from "react";
import { Flex } from "ui/Flex";
import { IUserWorkoutExercise } from "types";
import { useAuth, useExercises } from "store";

interface StyledCardProps {
  checked?: boolean;
}

const StyledCard = styled.div`
  padding: 10px;
  width: 100%;
  background-color: ${({ checked }: StyledCardProps) =>
    checked ? "#007aff" : "#383838"};
  border-radius: 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
  transition: all 0.2s ease;
`;

const StyledImage = styled.img`
  width: 75px;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  object-fit: contain;
  object-position: center;
`;

const StyledCardTitle = styled.p`
  font-family: "Unbounded";
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0;
  text-align: left;
`;
const StyledCardText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;
`;

const StyledTutorialLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  display: block;
  width: max-content;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid #fff;
  outline: none;
  font-weight: 800;
`;

interface ExerciseCardProps {
  exercise: IUserWorkoutExercise;
}

export const ExerciseCard: FC<ExerciseCardProps> = ({ exercise }) => {
  const [checked, setChecked] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const userExercises = useAuth(state => state.userExercises);
  const exercises = useExercises(state => state.exercises);

  const exerciseString = `${exercise.repeats} sets of ${exercise.timesPerRepeat} reps, ${exercise.weight}kg + ${exercise.weightIncrease} each set`;

  const fullExercise = userExercises.some(
    item => item._id === exercise.exerciseId,
  )
    ? userExercises.find(item => item._id === exercise.exerciseId)
    : exercises.find(item => item._id === exercise.exerciseId);

  return (
    <StyledCard
      checked={checked}
      onClick={e => {
        if (e.target === linkRef.current) {
          return;
        }
        setChecked(prev => !prev);
      }}
    >
      <StyledImage src={exercise.image} alt={exercise.name} />
      <Flex d="column" g={10}>
        <StyledCardTitle>{exercise.name}</StyledCardTitle>
        {!!exercise.repeats && (
          <StyledCardText>{exerciseString}</StyledCardText>
        )}
        {fullExercise?.tutorialLink && (
          <StyledTutorialLink
            ref={linkRef}
            href={fullExercise.tutorialLink}
            target="_blank"
          >
            Watch tutorial
          </StyledTutorialLink>
        )}
      </Flex>
    </StyledCard>
  );
};
