import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const FiftyPercentWidthFormControl = styled(FormControl)`
  width: calc(50% - 7px) !important;
`;

const StyledFieldsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FormsSection = () => {
  return (
    <StyledSection>
      <form>
        <FormControl fullWidth variant="standard">
          <Input
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <StyledFieldsWrapper>
          <FiftyPercentWidthFormControl variant="standard">
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
          </FiftyPercentWidthFormControl>
        </StyledFieldsWrapper>
      </form>
    </StyledSection>
  );
};
