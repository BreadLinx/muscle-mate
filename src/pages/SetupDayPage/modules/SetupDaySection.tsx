import { AddNewExerciseButton } from "../components/AddNewExerciseButton";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
`;

export const SetupDaySection = () => {
  return (
    <StyledSection>
      <AddNewExerciseButton />
    </StyledSection>
  );
};
