import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { FC } from "react";
import { motion } from "framer-motion";

const StyledListElement = styled(motion.li)`
  background-color: #383838;
  border-radius: 20px;
  padding: 10px;

  display: grid;
  grid-template-areas:
    "image title"
    "image tags"
    "image description";
  grid-template-columns: 150px 1fr;
  grid-template-rows: min-content min-content 76px;
  column-gap: 20px;
  row-gap: 10px;
`;

const StyledTitleFlexWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  grid-area: title;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  grid-area: image;
`;

const StyledTitle = styled.p`
  font-family: "Unbounded";
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledDescription = styled.p`
  max-height: 76px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #cacaca;
  overflow-y: hidden;
`;

const StyledTagText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #7c7c7c;
`;

const StyledAddButton = styled.button`
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const StyledTagsList = styled.div`
  grid-area: tags;

  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow-x: hidden;
`;

const StyledTag = styled.li``;

interface ExerciseCardProps {
  image: string;
  title: string;
  groups: string[];
  description?: string;
}

export const ExerciseCard: FC<ExerciseCardProps> = ({
  image,
  title,
  groups,
  description,
}) => {
  return (
    <StyledListElement
      layout
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
      }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <StyledImage src={image} alt={title} />

      <StyledTitleFlexWrapper>
        <StyledTitle>{title}</StyledTitle>

        <StyledAddButton>
          <AddCircleOutlineIcon />
        </StyledAddButton>
      </StyledTitleFlexWrapper>

      <StyledTagsList>
        {groups.map(group => {
          return <StyledTagText key={group}>{group}</StyledTagText>;
        })}
      </StyledTagsList>

      <StyledDescription>{description}</StyledDescription>
    </StyledListElement>
  );
};
