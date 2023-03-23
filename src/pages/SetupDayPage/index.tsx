import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";
import { useParams, useNavigate } from "react-router-dom";
import { SetupDaySection } from "./modules/SetupDaySection";
import { useAuth } from "store";
import { Tdays } from "types";
import { useEffect, useState } from "react";

export const SetupDayPage = () => {
  const { day } = useParams() as { day: Tdays };
  const navigate = useNavigate();
  const titleFont = day === "wednesday" ? 29 : 32;
  const { workouts, applyWorkoutChanges, changeWorkoutDayGroupClient } =
    useAuth(state => state);
  const properDay = workouts && workouts[day];
  // console.log(properDay);

  const [musclesSelectValue, setMusclesSelectValue] = useState(
    properDay!.name ? properDay!.name : "",
  );

  useEffect(() => {
    changeWorkoutDayGroupClient(day, musclesSelectValue);
  }, [musclesSelectValue]);

  return (
    <WithoutBottomNavigation
      title={`Set up ${day}`}
      titleFont={titleFont}
      arrowPath="/setupplan"
      bottomButtonHandler={() => {
        applyWorkoutChanges(day);
        navigate("/");
      }}
    >
      <SetupDaySection
        dayExercises={properDay!.exercises}
        selectValue={musclesSelectValue}
        setSelectValue={setMusclesSelectValue}
      />
    </WithoutBottomNavigation>
  );
};
