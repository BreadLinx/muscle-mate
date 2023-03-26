import styled from "styled-components";
import { FC, useState } from "react";
import { Flex } from "ui/Flex";
import { IUserWorkoutExercise } from "types";

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

interface ExerciseCardProps {
  exercise: IUserWorkoutExercise;
}

export const ExerciseCard: FC<ExerciseCardProps> = ({ exercise }) => {
  const [checked, setChecked] = useState(false);

  const exerciseString = `${exercise.repeats} sets of ${exercise.timesPerRepeat} reps, ${exercise.weight}kg + ${exercise.weightIncrease} each set`;

  return (
    <StyledCard
      checked={checked}
      onClick={() => {
        setChecked(prev => !prev);
      }}
    >
      <StyledImage src={exercise.image} alt={exercise.name} />
      <Flex d="column" g={10}>
        <StyledCardTitle>{exercise.name}</StyledCardTitle>
        {!!exercise.repeats && (
          <StyledCardText>{exerciseString}</StyledCardText>
        )}
      </Flex>
    </StyledCard>
  );
};
