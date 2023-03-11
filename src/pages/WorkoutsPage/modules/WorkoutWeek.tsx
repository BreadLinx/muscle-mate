import styled from "styled-components";
import { FC, ReactNode } from "react";
import { WorkoutDay, DayStates } from "../components/WorkoutDay";

interface WorkoutWeekProps {
  children?: ReactNode;
}

const StyledList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  list-style: none;
`;

export const WorkoutWeek: FC<WorkoutWeekProps> = ({ children }) => {
  return (
    <StyledList>
      <WorkoutDay day="Monday" group="Legs" />
      <WorkoutDay day="Tuesday" group="Chest" />
      <WorkoutDay day="Wednesday" />
      <WorkoutDay day="Thursday" group="Back" />
      <WorkoutDay day="Friday" group="Arms" />
      <WorkoutDay day="Saturday" />
      <WorkoutDay day="Sunday" />
    </StyledList>
  );
};
