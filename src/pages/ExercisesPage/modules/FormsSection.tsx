import styled from "styled-components";
import { Input } from "ui/Input";
import { Select } from "ui/Select";
import SearchIcon from "@mui/icons-material/Search";
import { FC, ChangeEvent } from "react";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
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

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

interface FormsSectionProps {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}

export const FormsSection: FC<FormsSectionProps> = ({
  searchValue,
  handleSearch,
  selectValue,
  setSelectValue,
}) => {
  return (
    <StyledSection>
      <StyledForm autoComplete="off">
        <Input
          htmlId="search-input"
          placeholder="Search"
          name="search"
          value={searchValue}
          onChange={handleSearch}
          StartIcon={<SearchIcon />}
        />
        <Select
          placeholder="Select muscles"
          drawerInitialList={musclesDrawerElementList}
          multichoice
          inputValue={selectValue}
          setInputValue={setSelectValue}
        />
      </StyledForm>
    </StyledSection>
  );
};
