import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import styled from "styled-components";
import { FC } from "react";

const StyledArticleCategoryElement = styled.li`
  display: flex;
  flex-flow: row nowrap;
  gap: 5px;
  align-items: center;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 18px;
`;

interface IExerciseCardCategory {
  text: string;
}

export const ExerciseCardCategory: FC<IExerciseCardCategory> = ({ text }) => {
  return (
    <StyledArticleCategoryElement>
      <FiberManualRecordIcon
        sx={{
          width: "8px",
          height: "8px",
        }}
      />
      {text}
    </StyledArticleCategoryElement>
  );
};
