import styled from "styled-components";
import { Flex } from "ui/Flex";
import { FC } from "react";

interface WorkoutListElementProps {
  image?: string;
}

const StyledListElement = styled.li`
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const StyledExerciseName = styled.p`
  font-size: 25px;
  font-weight: 700;
`;
const StyledExerciseCategory = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const WorkoutListElement: FC<WorkoutListElementProps> = ({ image }) => {
  return (
    <StyledListElement
      onClick={() => {
        console.log("сбка");
      }}
    >
      <Flex d="row" g={20} a="center">
        <StyledImage src={image} alt="" />
        <Flex d="column" g={10}>
          <StyledExerciseName>Pull-ups x10 x3 56 kg</StyledExerciseName>
          <StyledExerciseCategory>breast</StyledExerciseCategory>
        </Flex>
      </Flex>
    </StyledListElement>
  );
};
