import styled from "styled-components";
import { Input } from "ui/Input";
import { Select } from "ui/Select";
import SearchIcon from "@mui/icons-material/Search";
import { useFormAndValidation } from "hooks/useFormAndValidation";
import { FC, ChangeEvent } from "react";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledFieldsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const musclesDrawerElementList = [
  "Chest",
  "Back",
  "Abs & Core",
  "Neck",
  "Legs & Glutes",
  "Shoulders",
  "Arms",
];
const equipmentDrawerElementList = [
  "Body weight",
  "Machine",
  "Barbell",
  "Dumbbells",
];

interface FormsSectionProps {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormsSection: FC<FormsSectionProps> = ({
  searchValue,
  handleSearch,
}) => {
  return (
    <StyledSection>
      <form autoComplete="off">
        <Input
          htmlId="search-input"
          placeholder="Search"
          name="search"
          value={searchValue}
          onChange={handleSearch}
          StartIcon={<SearchIcon />}
        />

        <StyledFieldsWrapper>
          <Select
            placeholder="Select muscles"
            drawerInitialList={musclesDrawerElementList}
            multichoice
          />

          <Select
            placeholder="Select equipment"
            drawerInitialList={equipmentDrawerElementList}
            multichoice
          />
        </StyledFieldsWrapper>
      </form>
    </StyledSection>
  );
};
