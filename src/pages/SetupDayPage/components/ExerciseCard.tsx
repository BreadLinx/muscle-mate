import styled from "styled-components";
import { Flex } from "ui/Flex";
import { Input } from "ui/Input";
import { Select } from "ui/Select";
import RemoveIcon from "@mui/icons-material/Remove";
import { useFormAndValidation } from "hooks/useFormAndValidation";
import { ChangeEvent, FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "store";
import { Tdays, IUserWorkoutExercise } from "types";

const StyledCard = styled.article`
  padding: 10px;
  background-color: #383838;
  width: 100%;
  border-radius: 20px;

  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
`;

const StyledImage = styled.img`
  border-radius: 10px;
  width: 150px;
  height: 150px;
  outline: none;
`;

const StyledCardTitle = styled.p`
  font-family: "Unbounded";
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0;
  text-align: left;
`;

const StyledForm = styled.form`
  width: calc(100% - 170px);

  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

interface ExerciseCardProps {
  cardIndex: number;
  exercise: IUserWorkoutExercise;
}

export const ExerciseCard: FC<ExerciseCardProps> = ({
  exercise,
  cardIndex,
}) => {
  const { day } = useParams() as { day: Tdays };
  const { deleteClientExercise, setClientExerciseSetting } = useAuth(
    state => state,
  );

  useEffect(() => {
    setValues({
      initialWeight: `${exercise.weight === 0 ? "" : exercise.weight}`,
      weightGain: `${
        exercise.weightIncrease === 0 ? "" : exercise.weightIncrease
      }`,
      sets: `${exercise.repeats === 0 ? "" : exercise.repeats}`,
      reps: `${exercise.timesPerRepeat === 0 ? "" : exercise.timesPerRepeat}`,
    });
  }, []);

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();

  const handleSettingsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    handleChange(e);
    switch (name) {
      case "initialWeight":
        setClientExerciseSetting({
          day,
          cardIndex,
          initialWeight: value,
          weightGain: values.weightGain,
          repeats: values.sets,
          timesPerRepeat: values.reps,
        });
        break;
      case "weightGain":
        setClientExerciseSetting({
          day,
          cardIndex,
          initialWeight: values.initialWeight,
          weightGain: value,
          repeats: values.sets,
          timesPerRepeat: values.reps,
        });
        break;
      case "sets":
        setClientExerciseSetting({
          day,
          cardIndex,
          initialWeight: values.initialWeight,
          weightGain: values.weightGain,
          repeats: value,
          timesPerRepeat: values.reps,
        });
        break;
      case "reps":
        setClientExerciseSetting({
          day,
          cardIndex,
          initialWeight: values.initialWeight,
          weightGain: values.weightGain,
          repeats: values.sets,
          timesPerRepeat: value,
        });
        break;
    }
  };

  return (
    <StyledCard>
      <StyledImage src={exercise.image} alt={exercise.name} />
      <StyledForm>
        <Flex d="row" j="space-between">
          <StyledCardTitle>{exercise.name}</StyledCardTitle>
          <RemoveIcon
            onClick={() => {
              deleteClientExercise(day as Tdays, cardIndex);
              console.log(cardIndex, day);
            }}
          />
        </Flex>
        <Input
          htmlId="initial-weight-input"
          placeholder="Set initial weight"
          type="number"
          name="initialWeight"
          onChange={handleSettingsChange}
          value={values.initialWeight || ""}
          minNumber={0}
          maxNumber={1000}
        />
        <Input
          htmlId="weight-gain-input"
          placeholder="Set weight gain"
          type="number"
          name="weightGain"
          onChange={handleSettingsChange}
          value={values.weightGain || ""}
          minNumber={0}
          maxNumber={50}
        />
        <Input
          htmlId="sets-input"
          placeholder="Set sets"
          type="number"
          name="sets"
          onChange={handleSettingsChange}
          value={values.sets || ""}
          minNumber={0}
          maxNumber={200}
        />
        <Input
          htmlId="rep-input"
          placeholder="Set reps per set"
          type="number"
          name="reps"
          onChange={handleSettingsChange}
          value={values.reps || ""}
          minNumber={0}
          maxNumber={200}
        />
      </StyledForm>
    </StyledCard>
  );
};
