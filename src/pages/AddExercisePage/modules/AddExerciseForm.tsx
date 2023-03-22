import styled from "styled-components";
import { Select } from "ui/Select";
import { Input } from "ui/Input";
import { ImageInput } from "../components/ImageInput";
import { useFormAndValidation } from "hooks/useFormAndValidation";
import { Button } from "ui/Button";
import { useState } from "react";
import { FormEvent } from "react";
import { useExercises } from "store";
import { useAuth } from "store/authStore";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
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

const StyledCautionText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  color: #7c7c7c;
`;

export const AddExerciseForm = () => {
  const createUserExercise = useAuth(state => state.createUserExercise);

  const { values, handleChange, handleTextAreaChange, resetForm } =
    useFormAndValidation();
  const [selectValue, setSelectValue] = useState("");
  const [fileValue, setFileValue] = useState<File>();
  const [previewFileValue, setPreviewFileValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fileValue) {
      const formData = new FormData();
      formData.append("name", values.nameInput);
      formData.append("exerciseImage", fileValue);
      formData.append("tutorialLink", values.tutorialInput || "");
      formData.append("description", values.descriptionInput || "");
      formData.append("groups", selectValue);

      createUserExercise(formData);
      resetForm();
      setSelectValue("");
      setFileValue(undefined);
      setPreviewFileValue("");
    }
  };

  return (
    <StyledSection>
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <StyledCautionText>
          * Exercise will me added in your own exercises list, you will be able
          you use your own added exercises however you want.
        </StyledCautionText>
        <ImageInput
          setFileValue={setFileValue}
          previewFileValue={previewFileValue}
          setPreviewFileValue={setPreviewFileValue}
        />
        <Input
          htmlId="exercise-name-input"
          placeholder="Pull up"
          value={values.nameInput || ""}
          onChange={handleChange}
          name="nameInput"
          label="Exercise name*"
        />
        <Select
          placeholder="Select muscles"
          drawerInitialList={musclesDrawerElementList}
          multichoice
          label="Choose muscle groups*"
          inputValue={selectValue}
          setInputValue={setSelectValue}
        />
        <Input
          htmlId="exercise-tutorial-input"
          placeholder="https://www.youtube.com/watch?v=WD"
          value={values.tutorialInput || ""}
          onChange={handleChange}
          name="tutorialInput"
          label="Tutorial link"
        />
        <Input
          htmlId="description-input"
          placeholder="Reverse Lunge with a Twist - Start by standing with your feet hip-width apart and your hands clasped in front of your chest. Take a big step back with your right foot and bend both knees to lower into a lunge position. As you lower, twist your torso to the left, reaching your clasped hands toward your left knee....."
          value={values.descriptionInput || ""}
          onChange={handleTextAreaChange}
          name="descriptionInput"
          label="Description"
          multiline
        />
        <Button type="submit">Add exercise</Button>
      </StyledForm>
    </StyledSection>
  );
};
