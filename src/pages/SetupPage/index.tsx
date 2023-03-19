import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { WorkoutWeek } from "pages/WorkoutsPage/modules/WorkoutWeek";
import { DayStates } from "pages/WorkoutsPage/components/WorkoutDay";

const WorkoutWeekParams = [
  {
    name: "Monday",
    state: DayStates.Default,
    path: "/setupplan/monday",
    group: "",
  },
  {
    name: "Tuesday",
    state: DayStates.Default,
    path: "/setupplan/tuesday",
    group: "",
  },
  {
    name: "Wednesday",
    state: DayStates.Default,
    path: "/setupplan/wednesday",
    group: "",
  },
  {
    name: "Thursday",
    state: DayStates.Default,
    path: "/setupplan/thursday",
    group: "",
  },
  {
    name: "Friday",
    state: DayStates.Default,
    path: "/setupplan/friday",
    group: "",
  },
  {
    name: "Saturday",
    state: DayStates.Default,
    path: "/setupplan/saturday",
    group: "",
  },
  {
    name: "Sunday",
    state: DayStates.Default,
    path: "/setupplan/sunday",
    group: "",
  },
];

export const SetupPage = () => {
  return (
    <MainLayout
      title="Set up plan"
      titleFont={30}
      additionalLink={{
        text: "Workouts",
        path: "/",
      }}
    >
      <WorkoutWeek week={WorkoutWeekParams} />
    </MainLayout>
  );
};
