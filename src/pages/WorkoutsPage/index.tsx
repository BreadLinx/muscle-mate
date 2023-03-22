import styled from "@emotion/styled";
import { WorkoutWeek } from "./modules/WorkoutWeek";
import { MainLayout } from "layouts/MainLayout";
import { DayStates } from "pages/WorkoutsPage/components/WorkoutDay";
import { useMemo } from "react";
import { useAuth } from "store/authStore";
import { IUserWorkoutExercise } from "types";

const WorkoutWeekParams = [
  {
    name: "Monday",
    state: DayStates.Default,
    path: "/monday",
    group: "",
    exercises: [] as IUserWorkoutExercise[],
  },
  {
    name: "Tuesday",
    state: DayStates.Default,
    path: "/tuesday",
    group: "",
    exercises: [] as IUserWorkoutExercise[],
  },
  {
    name: "Wednesday",
    state: DayStates.Default,
    path: "/wednesday",
    group: "",
    exercises: [] as IUserWorkoutExercise[],
  },
  {
    name: "Thursday",
    state: DayStates.Default,
    path: "/thursday",
    group: "",
    exercises: [] as IUserWorkoutExercise[],
  },
  {
    name: "Friday",
    state: DayStates.Default,
    path: "/friday",
    group: "",
    exercises: [] as IUserWorkoutExercise[],
  },
  {
    name: "Saturday",
    state: DayStates.Default,
    path: "/saturday",
    group: "",
    exercises: [] as IUserWorkoutExercise[],
  },
  {
    name: "Sunday",
    state: DayStates.Default,
    path: "/sunday",
    group: "",
    exercises: [] as IUserWorkoutExercise[],
  },
];

const date = new Date();

export const WorkoutsPage = () => {
  const { workouts } = useAuth(state => state);

  const week = useMemo(() => {
    let actualWeek: any = [...WorkoutWeekParams];

    if (workouts) {
      actualWeek = WorkoutWeekParams.map((item, index) => {
        let dayElement: { name: string; exercises: IUserWorkoutExercise[] } = {
          name: "",
          exercises: [],
        };

        switch (index) {
          case 1:
            dayElement = {
              name: workouts.monday.name,
              exercises: [...workouts.monday.exercises],
            };
            break;
          case 2:
            dayElement = {
              name: workouts.tuesday.name,
              exercises: [...workouts.tuesday.exercises],
            };
            break;
          case 3:
            dayElement = {
              name: workouts.wednesday.name,
              exercises: [...workouts.wednesday.exercises],
            };
            break;
          case 4:
            dayElement = {
              name: workouts.thursday.name,
              exercises: [...workouts.thursday.exercises],
            };
            break;
          case 5:
            dayElement = {
              name: workouts.friday.name,
              exercises: [...workouts.friday.exercises],
            };
            break;
          case 6:
            dayElement = {
              name: workouts.saturday.name,
              exercises: [...workouts.saturday.exercises],
            };
            break;
          case 0:
            dayElement = {
              name: workouts.sunday.name,
              exercises: [...workouts.sunday.exercises],
            };
            break;
        }

        return {
          ...item,
          group: dayElement.name,
          exercises: [...dayElement.exercises],
        };
      });
    }

    const currentDay = actualWeek[(date.getDay() + 6) % 7];
    if (currentDay.state !== DayStates.Done) {
      actualWeek[(date.getDay() + 6) % 7] = {
        ...currentDay,
        state: DayStates.Active,
      };
    }

    return actualWeek;
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
