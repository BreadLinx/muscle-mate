import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { ExerciseCard } from "components/ExerciseCard";
import { ExercisesLayout } from "layouts/ExercisesLayout";
import { Flex } from "ui/Flex";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Chip,
} from "@mui/material";
import { useExercises } from "store/exercisesStore";

const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  column-gap: 40px;
  row-gap: 60px;
`;

const areas = [
  "Chest",
  "Back",
  "Abs & Core",
  "Neck",
  "Legs",
  "Shoulders",
  "Arms",
];

export const ExercicesPage: FC = () => {
  const [age, setAge] = useState<string[]>([]);
  const { exercises, getExercises } = useExercises(state => state);

  useEffect(() => {
    getExercises();
  }, []);

  const handleSelectChange = (e: SelectChangeEvent<typeof age>) => {
    const {
      target: { value },
    } = e;
    setAge(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <ExercisesLayout>
      <Flex d="row" g={10}>
        <FormControl variant="standard" sx={{ mb: 5, width: "30%" }}>
          <InputLabel id="demo-simple-select-standard-label">Area</InputLabel>
          <Select
            sx={{ minHeight: 42 }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleSelectChange}
            label="Area"
            multiple
            renderValue={selected => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {areas.map(area => (
              <MenuItem key={area} value={area}>
                {area}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Flex>
      <StyledSection>
        {exercises.map(exercise => {
          return <ExerciseCard key={exercise._id} exercise={exercise} />;
        })}
      </StyledSection>
    </ExercisesLayout>
  );
};
