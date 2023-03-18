import styled from "styled-components";
import { FC, ReactNode } from "react";
import { WorkoutDay, DayStates } from "../components/WorkoutDay";

interface WorkoutWeekProps {
  week: {
    name: string;
    state: DayStates;
    path: string;
    group: string;
  }[];
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

export const WorkoutWeek: FC<WorkoutWeekProps> = ({ week }) => {
  return (
    <StyledList>
      {week.map(item => {
        return (
          <WorkoutDay
            key={item.name}
            day={item.name}
            group={item.group}
            path={item.path}
            state={item.state}
          />
        );
      })}
    </StyledList>
  );
};
