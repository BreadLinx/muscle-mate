import styled from "styled-components";
import { Input } from "ui/Input";
import { Select } from "ui/Select";
import SearchIcon from "@mui/icons-material/Search";
import { useFormAndValidation } from "hooks/useFormAndValidation";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

// const FiftyPercentWidthFormControl = styled(FormControl)`
//   width: calc(50% - 7px) !important;
// `;

const StyledFieldsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const musclesDrawerElementList = ["Arms", "Legs", "Back", "Chest"];
const equipmentDrawerElementList = ["Arms", "Legs", "Back", "Chest"];

export const FormsSection = () => {
  const { values, handleChange } = useFormAndValidation();

  return (
    <StyledSection>
      <form autoComplete="off">
        {/* <FormControl fullWidth variant="standard">
          <Input
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl> */}
        <Input
          htmlId="search-input"
          placeholder="Search"
          name="search"
          value={values.search || ""}
          onChange={handleChange}
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
          {/* <FiftyPercentWidthFormControl variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Select muscles
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FiftyPercentWidthFormControl>
          <FiftyPercentWidthFormControl variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Select equipment
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FiftyPercentWidthFormControl> */}
        </StyledFieldsWrapper>
      </form>
    </StyledSection>
  );
};
