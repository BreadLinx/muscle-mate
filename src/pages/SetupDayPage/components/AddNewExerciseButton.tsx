import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { useParams, useNavigate } from "react-router-dom";

const StyledAddNewButton = styled.button`
  width: 100%;
  background-color: #383838;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & svg {
    width: 48px;
    height: 48px;
  }
`;

const StyledText = styled.p`
  font-family: "Unbounded";
  font-size: 22px;
  font-weight: 900;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const AddNewExerciseButton = () => {
  const { day } = useParams();
  const navigate = useNavigate();

  return (
    <StyledAddNewButton
      onClick={() => {
        navigate("chooseexercise");
      }}
    >
      <AddIcon />
      <StyledText>Add exercise</StyledText>
    </StyledAddNewButton>
  );
};
