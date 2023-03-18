import styled from "@emotion/styled";
import { WorkoutWeek } from "./modules/WorkoutWeek";
import { MainLayout } from "layouts/MainLayout";
import { DayStates } from "pages/WorkoutsPage/components/WorkoutDay";
import { useMemo } from "react";
import { useAuth } from "store";

const WorkoutWeekParams = [
  {
    name: "Monday",
    state: DayStates.Default,
    path: "/setupplan/monday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Tuesday",
    state: DayStates.Default,
    path: "/setupplan/tuesday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Wednesday",
    state: DayStates.Default,
    path: "/setupplan/wednesday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Thursday",
    state: DayStates.Default,
    path: "/setupplan/thursday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Friday",
    state: DayStates.Default,
    path: "/setupplan/friday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Saturday",
    state: DayStates.Default,
    path: "/setupplan/saturday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Sunday",
    state: DayStates.Default,
    path: "/setupplan/sunday",
    group: "",
    exercises: [] as string[],
  },
];

const date = new Date();

export const WorkoutsPage = () => {
  const { workouts } = useAuth(state => state);

  const week = useMemo(() => {
    if (workouts) {
      return WorkoutWeekParams.map((item, index) => {
        let dayElement: { name: string; exercices: string[] } = {
          name: "",
          exercices: [],
        };

        switch (index) {
          case 0:
            dayElement = workouts.monday;
            break;
          case 1:
            dayElement = workouts.tuesday;
            break;
          case 2:
            dayElement = workouts.wednesday;
            break;
          case 3:
            dayElement = workouts.thursday;
            break;
          case 4:
            dayElement = workouts.friday;
            break;
          case 5:
            dayElement = workouts.saturday;
            break;
          case 6:
            dayElement = workouts.sunday;
            break;
        }

        if (date.getDay() === index) {
          item = {
            ...item,
            group: dayElement.name,
            exercises: [...dayElement.exercices],
            state: DayStates.Active,
          };
        } else {
          item = {
            ...item,
            group: dayElement.name,
            exercises: [...dayElement.exercices],
          };
        }
        return item;
      });
    }
    return WorkoutWeekParams;
  }, [workouts]);

  return (
    <MainLayout
      title="Workouts"
      additionalLink={{
        text: "Set up plan",
        path: "/setupplan",
      }}
    >
      <WorkoutWeek week={week} />
    </MainLayout>
  );
};
