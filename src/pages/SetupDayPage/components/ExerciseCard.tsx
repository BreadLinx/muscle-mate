import styled from "styled-components";
import { Flex } from "ui/Flex";
import { Input } from "ui/Input";
import { Select } from "ui/Select";
import RemoveIcon from "@mui/icons-material/Remove";
import { useFormAndValidation } from "hooks/useFormAndValidation";
import { ChangeEvent } from "react";

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
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const ExerciseCard = () => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();

  return (
    <StyledCard>
      <StyledImage />
      <StyledForm>
        <Flex d="row" j="space-between">
          <StyledCardTitle>Pull up</StyledCardTitle>
          <RemoveIcon />
        </Flex>
        <Input
          htmlId="initial-weight-input"
          placeholder="Set initial weight"
          type="number"
          name="initialWeight"
          onChange={handleChange}
          value={values.initialWeight || ""}
          minNumber={0}
          maxNumber={1000}
        />
        <Input
          htmlId="weight-gain-input"
          placeholder="Set weight gain"
          type="number"
          name="weightGain"
          onChange={handleChange}
          value={values.weightGain || ""}
          minNumber={0}
          maxNumber={50}
        />
        <Input
          htmlId="sets-input"
          placeholder="Set sets"
          type="number"
          name="sets"
          onChange={handleChange}
          value={values.sets || ""}
          minNumber={0}
          maxNumber={200}
        />
        <Input
          htmlId="rep-input"
          placeholder="Set reps per set"
          type="number"
          name="reps"
          onChange={handleChange}
          value={values.reps || ""}
          minNumber={0}
          maxNumber={200}
        />
      </StyledForm>
    </StyledCard>
  );
};
