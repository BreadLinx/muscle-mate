import styled from "styled-components";
import { useState, ChangeEvent, useEffect, useRef, FormEvent } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { motion } from "framer-motion";
import {
  Input,
  InputLabel,
  FormControl,
  Box,
  Chip,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { Flex } from "ui";
import { useExercises } from "store/exercisesStore";
// import { Select } from "ui/Select";

const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  gap: 40px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 75px;
`;

const StyledImageContainer = styled(motion.div)`
  height: 250px;
  width: 250px;
  border-radius: 20px;
  background-color: #3e3e3e;
  position: relative;
  cursor: pointer;
`;

const StyledAddPhotoAlternateIcon = styled(AddPhotoAlternateIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px !important;
  height: 70px !important;
`;

const StyledPreviewImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  opacity: 0.7;
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
  line-height: 62px;
  align-self: center;
`;

const areas = [
  "chest",
  "back",
  "abs & core",
  "neck",
  "legs",
  "shoulders",
  "arms",
];

export const AddExerciseForm = () => {
  const createExercise = useExercises(state => state.createExercise);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [nameValue, setNameValue] = useState("");
  const [tutorialLinkValue, setTutorialLinkValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [groupValues, setGroupValues] = useState<string[]>([]);
  const [fileValue, setFileValue] = useState<File>();

  const [previewFileValue, setPreviewFileValue] = useState("");

  useEffect(() => {
    console.log(fileValue);
  }, [fileValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if (reader.result) {
            setPreviewFileValue(reader.result as string);
          }

          setFileValue(file as File);
        };
      }
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<typeof groupValues>) => {
    const {
      target: { value },
    } = e;
    setGroupValues(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fileValue) {
      const groupsString = groupValues.join(",");

      const formData = new FormData();
      formData.append("name", nameValue);
      formData.append("exerciseImage", fileValue);
      formData.append("tutorialLink", tutorialLinkValue);
      formData.append("description", descriptionValue);
      formData.append("groups", groupsString);

      createExercise(formData);
    }
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <StyledTitle>Create new exercise</StyledTitle>
        <Flex d="row" g={50}>
          <StyledImageContainer
            whileHover={{ scale: 0.95, opacity: 0.8 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.click();
              }
            }}
          >
            {previewFileValue && <StyledPreviewImage src={previewFileValue} />}

            <StyledAddPhotoAlternateIcon />
          </StyledImageContainer>
          <Flex d="column" g={25}>
            <FormControl variant="standard" sx={{ width: "400px" }}>
              <InputLabel htmlFor="nameInput">exercise name</InputLabel>
              <Input
                onChange={e => {
                  setNameValue(e.target.value);
                }}
                value={nameValue}
                id="nameInput"
              />
            </FormControl>

            <FormControl variant="standard" sx={{ width: "400px" }}>
              <InputLabel htmlFor="tutorialLinkInput">tutorial link</InputLabel>
              <Input
                onChange={e => {
                  setTutorialLinkValue(e.target.value);
                }}
                value={tutorialLinkValue}
                id="tutorialLinkInput"
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel id="demo-simple-select-standard-label">
                muscle area
              </InputLabel>
              {/* <Select
                sx={{ minHeight: 42 }}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={groupValues}
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
              </Select> */}
            </FormControl>
            <FormControl variant="standard" sx={{ width: "400px" }}>
              <InputLabel htmlFor="descriptionInput">
                exercise description
              </InputLabel>
              <Input
                onChange={e => {
                  setDescriptionValue(e.target.value);
                }}
                value={descriptionValue}
                id="descriptionInput"
                multiline
                maxRows={15}
              />
            </FormControl>
          </Flex>
        </Flex>

        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          hidden
          ref={fileInputRef}
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </StyledForm>
    </StyledSection>
  );
};
