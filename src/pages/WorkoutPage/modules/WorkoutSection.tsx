import styled from "styled-components";
import { WorkoutAgenda } from "../components/WorkoutAgenda";
import { WorkoutList } from "../components/WorkoutList";
import { Button } from "@mui/material";

const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  gap: 40px;
`;

export const WorkoutSection = () => {
  return (
    <StyledSection>
      <WorkoutAgenda />
      <Button variant="outlined">Start workout</Button>
      <WorkoutList />
      <Button variant="outlined">End workout</Button>
    </StyledSection>
  );
};
