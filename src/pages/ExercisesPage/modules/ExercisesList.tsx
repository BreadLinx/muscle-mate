import styled from "styled-components";
import { ExerciseCard } from "../components/ExerciseCard";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  height: calc(100vh - 264.6px);
  margin-top: 10px;
  overflow-y: overlay;
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

export const ExercisesList = () => {
  return (
    <StyledSection>
      <StyledList>
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </StyledList>
    </StyledSection>
  );
};
