import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CircleIcon from "@mui/icons-material/Circle";

interface WorkoutWeekElementProps {
  current?: boolean;
  day?: string;
}

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 25px minmax(380px, min-content) 337px;
  column-gap: 30px;
  grid-template-areas: "currentPointer day workoutType";
  text-decoration: none;
  max-width: 100%;
  @media (max-width: 425px) {
    grid-template-areas: "day workoutType";
    justify-items: center;
    align-items: center;
    grid-template-columns: 222px 200px;
    column-gap: 25px;
  }
`;

const StyledCurrentPointer = styled(CircleIcon)`
  grid-area: currentPointer;
  align-self: center;
  justify-self: center;
  @media (max-width: 425px) {
    width: 15px !important;
  }
`;

const StyledDay = styled.p`
  grid-area: day;
  font-size: 50px;
  font-family: "Unbounded";
  font-weight: 700;

  @media (max-width: 425px) {
    font-size: 30px;
    font-weight: 900;
  }
`;

const StyledWorkoutType = styled.p`
  grid-area: workoutType;
  font-family: "Unbounded";
  font-size: 50px;
  @media (max-width: 425px) {
    font-size: 30px;
    font-weight: 900;
  }
`;

export const WorkoutWeekElement: FC<WorkoutWeekElementProps> = ({
  current = false,
  day = "Monday",
}) => {
  const linkRoute = useMemo(() => {
    return day.toLowerCase();
  }, [day]);

  return (
    <StyledLink to={`${linkRoute}`}>
      {current && <StyledCurrentPointer />}
      <StyledDay>{day}</StyledDay>
      <StyledWorkoutType>Chest</StyledWorkoutType>
    </StyledLink>
  );
};
