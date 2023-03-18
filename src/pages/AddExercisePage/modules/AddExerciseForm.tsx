import styled from "styled-components";
import { Select } from "ui/Select";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;
const StyledForm = styled.form``;

const DrawerElementList = ["Arms", "Legs", "Back", "Chest"];

export const AddExerciseForm = () => {
  return (
    <StyledSection>
      <StyledForm>
        <Select
          placeholder="Select muscles"
          drawerInitialList={DrawerElementList}
          multichoice
        />
      </StyledForm>
    </StyledSection>
  );
};
