import styled from "styled-components";
import { FC, useState, ChangeEvent } from "react";
import { Input } from "ui/Input";
import { Select } from "ui/Select";
import SearchIcon from "@mui/icons-material/Search";

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

const typesDrawerElementList = ["My own added", "Common exercises"];

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const StyledSelectsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 14px;
  align-items: center;
`;

interface FilterFormSectionProps {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  musclesselectValue: string;
  setMusclesSelectValue: React.Dispatch<React.SetStateAction<string>>;
  typeSelectValue: string;
  setTypeSelectValue: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterFormSection: FC<FilterFormSectionProps> = ({
  searchValue,
  handleSearch,
  musclesselectValue,
  setMusclesSelectValue,
  typeSelectValue,
  setTypeSelectValue,
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
        <StyledSelectsWrapper>
          <Select
            placeholder="Select muscles"
            drawerInitialList={musclesDrawerElementList}
            multichoice
            inputValue={musclesselectValue}
            setInputValue={setMusclesSelectValue}
          />
          <Select
            placeholder="Exercise type"
            drawerInitialList={typesDrawerElementList}
            inputValue={typeSelectValue}
            setInputValue={setTypeSelectValue}
          />
        </StyledSelectsWrapper>
      </StyledForm>
    </StyledSection>
  );
};
