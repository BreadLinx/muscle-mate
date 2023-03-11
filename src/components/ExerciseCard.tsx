import { FC } from "react";
import styled from "styled-components";
import exericeseImage from "images/exerciseText.jpg";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { ExerciseCardCategory } from "components/ExerciseCardCategory";
import { IExercise } from "types";
import { SERVER_URL } from "utils/api";

const StyledArticle = styled.article`
  display: grid;
  width: calc(100% / 5 - 32px);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 250px min-content min-content;
  row-gap: 10px;
  /* background-color: #2e2e2e; */
  grid-template-areas:
    "image image"
    "title wishlistIcon"
    "category category";
  /* border-radius: 10px; */
  cursor: pointer;
`;

const StyledArticleImage = styled.img`
  grid-area: image;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const StyledArticleTitle = styled.p`
  grid-area: title;
  font-family: "Unbounded", Arial, Helvetica, sans-serif;
  font-size: 22px;
  line-height: 27px;
  font-weight: 800;
`;

const StyledArticleCategory = styled.ul`
  grid-area: category;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`;

interface ExerciseCardProps {
  exercise: IExercise;
}

export const ExerciseCard: FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <StyledArticle>
      <StyledArticleImage src={`${SERVER_URL}${exercise.image}`} />
      <StyledArticleTitle>{exercise.name}</StyledArticleTitle>
      <ControlPointIcon
        sx={{
          width: "27px",
          height: "27px",
          gridArea: "wishlistIcon",
          justifySelf: "end",
          cursor: "pointer",
          transition: "ease .2s opacity",
          ":hover": {
            opacity: 0.3,
          },
        }}
      />
      <StyledArticleCategory>
        {exercise.muscleGroups.map(item => {
          return <ExerciseCardCategory key={item} text={item} />;
        })}
      </StyledArticleCategory>
    </StyledArticle>
  );
};
