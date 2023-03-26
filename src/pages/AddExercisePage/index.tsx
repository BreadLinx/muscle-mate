import { AddExerciseForm } from "./modules/AddExerciseForm";
import { BranchLayout } from "layouts/BranchLayout";
import { useFormAndValidation } from "hooks/useFormAndValidation";
import { useState, useEffect } from "react";
import { useAuth } from "store/authStore";
import { useNavigate } from "react-router-dom";

export const AddExercisePage = () => {
  const navigate = useNavigate();
  const [submitButtonStatus, setSubmitButtonStatus] = useState<
    "default" | "loading" | "done"
  >("default");

  const { createUserExercise, createUserExerciseRequestData } = useAuth(
    state => state,
  );

  useEffect(() => {
    if (createUserExerciseRequestData.request) {
      setSubmitButtonStatus("loading");
      return;
    }
    if (createUserExerciseRequestData.success) {
      setSubmitButtonStatus("done");

      resetForm();
      setSelectValue("");
      setFileValue(undefined);

      setTimeout(() => {
        setSubmitButtonStatus("default");
        navigate("/exercises/my");
      }, 1500);
      return;
    }
    setSubmitButtonStatus("default");
  }, [createUserExerciseRequestData]);

  const { values, handleChange, handleTextAreaChange, resetForm } =
    useFormAndValidation();
  const [selectValue, setSelectValue] = useState("");
  const [fileValue, setFileValue] = useState<File>();

  const handleSubmit = () => {
    if (fileValue) {
      const formData = new FormData();
      formData.append("name", values.nameInput);
      formData.append("exerciseImage", fileValue);
      formData.append("tutorialLink", values.tutorialInput || "");
      formData.append("description", values.descriptionInput || "");
      formData.append("groups", selectValue);

      createUserExercise(formData);
    }
  };

  return (
    <BranchLayout
      title="Add new exercise"
      titleFont={30}
      arrowPath="/exercises/my"
      submitButonOptions={{
        text: "Add exercise",
        handleClick: handleSubmit,
        status: submitButtonStatus,
      }}
    >
      <AddExerciseForm
        setFileValue={setFileValue}
        values={values}
        handleChange={handleChange}
        handleTextAreaChange={handleTextAreaChange}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
    </BranchLayout>
  );
};
