import styled from "styled-components";
import { WorkoutListElement } from "./WorkoutListElement";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
`;

export const WorkoutList = () => {
  return (
    <StyledList>
      <WorkoutListElement />
      <WorkoutListElement />
      <WorkoutListElement />
      <WorkoutListElement />
    </StyledList>
  );
};
