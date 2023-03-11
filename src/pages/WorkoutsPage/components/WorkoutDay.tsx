import styled from "styled-components";
import { Link } from "react-router-dom";
import { FC } from "react";

export enum DayStates {
  Default = "default",
  Active = "active",
  Done = "done",
}

const StyledListElement = styled.li`
  background-color: ${(props: { state: DayStates }) => {
    switch (props.state) {
      case DayStates.Default:
        return "#383838";
      case DayStates.Active:
        return "#5F9E55";
      case DayStates.Done:
        return "#447EB4";
    }
  }};
  border-radius: 20px;
`;

const StyledLinkContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  border-radius: inherit;
  position: relative;
`;

const StyledDayText = styled.p`
  font-family: "Unbounded";
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  position: absolute;
  left: 40px;
`;

const StyledGroupText = styled.p`
  font-family: "Unbounded";
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  position: absolute;
  left: 260px;
`;

interface WorkoutDayProps {
  day: string;
  group?: string;
  state?: DayStates;
}

export const WorkoutDay: FC<WorkoutDayProps> = ({
  day,
  group,
  state = DayStates.Default,
}) => {
  return (
    <StyledListElement state={state}>
      <StyledLinkContainer to="/">
        <StyledDayText>{day}</StyledDayText>
        <StyledGroupText>{group}</StyledGroupText>
      </StyledLinkContainer>
    </StyledListElement>
  );
};
