import styled from "styled-components";
import { Input } from "ui/Input";
import { Select } from "ui/Select";
import SearchIcon from "@mui/icons-material/Search";
import { useFormAndValidation } from "hooks/useFormAndValidation";
import { FC, ChangeEvent, useState } from "react";

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
}

export const FormsSection: FC<FormsSectionProps> = ({
  searchValue,
  handleSearch,
}) => {
  const [musclesSelectValue, setMusclesSelectValue] = useState("");

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
          inputValue={musclesSelectValue}
          setInputValue={setMusclesSelectValue}
        />
      </StyledForm>
    </StyledSection>
  );
};
