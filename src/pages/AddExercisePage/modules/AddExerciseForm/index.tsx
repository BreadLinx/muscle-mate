import { Select } from "ui/Select";
import { Input } from "ui/Input";
import { Button } from "ui/Button";
import { ImageInput } from "pages/AddExercisePage/components/ImageInput";
import { FC, FormEvent } from "react";

import * as S from "./styles";

const musclesDrawerElementList = [
  "Chest",
  "Back",
  "Abs & Core",
  "Neck",
  "Legs & Glutes",
  "Shoulders",
  "Arms",
];

interface AddExerciseFormProps {
  setFileValue: React.Dispatch<React.SetStateAction<File | undefined>>;
  values: { [key: string]: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}

export const AddExerciseForm: FC<AddExerciseFormProps> = ({
  setFileValue,
  values,
  handleChange,
  handleTextAreaChange,
  selectValue,
  setSelectValue,
}) => {
  return (
    <S.Section>
      <S.Form autoComplete="off">
        <S.CautionText>
          * Exercise will me added in your own exercises list, you will be able
          you use your own added exercises however you want.
        </S.CautionText>
        <ImageInput setFileValue={setFileValue} />
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
      </S.Form>
    </S.Section>
  );
};
