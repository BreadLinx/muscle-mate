import styled from "styled-components";
import { WorkoutWeekElement } from "components/WorkoutWeekElement";

const StyledLIst = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  max-width: 720px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  gap: 15px;
  align-items: center;
  height: calc(100vh - 90px);

  @media (max-width: 425px) {
    height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
    gap: 35px;
  }
`;

export const WorkoutsWeek = () => {
  return (
    <StyledLIst>
      <WorkoutWeekElement day="Monday" current />
      <WorkoutWeekElement day="Tuesday" />
      <WorkoutWeekElement day="Wednesday" />
      <WorkoutWeekElement day="Thursday" />
      <WorkoutWeekElement day="Friday" />
      <WorkoutWeekElement day="Saturday" />
      <WorkoutWeekElement day="Sunday" />
    </StyledLIst>
  );
};
