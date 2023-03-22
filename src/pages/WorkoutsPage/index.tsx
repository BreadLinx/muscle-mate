import styled from "@emotion/styled";
import { WorkoutWeek } from "./modules/WorkoutWeek";
import { MainLayout } from "layouts/MainLayout";
import { DayStates } from "pages/WorkoutsPage/components/WorkoutDay";
import { useMemo } from "react";
import { useAuth } from "store/authStore";

const WorkoutWeekParams = [
  {
    name: "Monday",
    state: DayStates.Default,
    path: "/monday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Tuesday",
    state: DayStates.Default,
    path: "/tuesday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Wednesday",
    state: DayStates.Default,
    path: "/wednesday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Thursday",
    state: DayStates.Default,
    path: "/thursday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Friday",
    state: DayStates.Default,
    path: "/friday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Saturday",
    state: DayStates.Default,
    path: "/saturday",
    group: "",
    exercises: [] as string[],
  },
  {
    name: "Sunday",
    state: DayStates.Default,
    path: "/sunday",
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
          case 1:
            dayElement = {
              name: workouts.monday.name,
              exercices: [...workouts.monday.exercices],
            };
            break;
          case 2:
            dayElement = {
              name: workouts.tuesday.name,
              exercices: [...workouts.tuesday.exercices],
            };
            break;
          case 3:
            dayElement = {
              name: workouts.wednesday.name,
              exercices: [...workouts.wednesday.exercices],
            };
            break;
          case 4:
            dayElement = {
              name: workouts.thursday.name,
              exercices: [...workouts.thursday.exercices],
            };
            break;
          case 5:
            dayElement = {
              name: workouts.friday.name,
              exercices: [...workouts.friday.exercices],
            };
            break;
          case 6:
            dayElement = {
              name: workouts.saturday.name,
              exercices: [...workouts.saturday.exercices],
            };
            break;
          case 0:
            dayElement = {
              name: workouts.sunday.name,
              exercices: [...workouts.sunday.exercices],
            };
            break;
        }

        if ((date.getDay() + 6) % 7 === index) {
          return {
            ...item,
            group: dayElement.name,
            exercises: [...dayElement.exercices],
            state: DayStates.Active,
          };
        } else {
          return {
            ...item,
            group: dayElement.name,
            exercises: [...dayElement.exercices],
          };
        }
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
