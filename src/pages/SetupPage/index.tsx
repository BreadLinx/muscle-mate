import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { WorkoutWeek } from "pages/WorkoutsPage/modules/WorkoutWeek";
import { DayStates } from "pages/WorkoutsPage/components/WorkoutDay";
import { useMemo } from "react";
import { useAuth } from "store";
import { IUserWorkoutExercise } from "types";

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

const date = new Date();

export const SetupPage = () => {
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
          case 0:
            dayElement = {
              name: workouts.monday.name,
              exercises: [...workouts.monday.exercises],
            };
            break;
          case 1:
            dayElement = {
              name: workouts.tuesday.name,
              exercises: [...workouts.tuesday.exercises],
            };
            break;
          case 2:
            dayElement = {
              name: workouts.wednesday.name,
              exercises: [...workouts.wednesday.exercises],
            };
            break;
          case 3:
            dayElement = {
              name: workouts.thursday.name,
              exercises: [...workouts.thursday.exercises],
            };
            break;
          case 4:
            dayElement = {
              name: workouts.friday.name,
              exercises: [...workouts.friday.exercises],
            };
            break;
          case 5:
            dayElement = {
              name: workouts.saturday.name,
              exercises: [...workouts.saturday.exercises],
            };
            break;
          case 6:
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

    return actualWeek;
  }, [workouts]);

  return (
    <MainLayout
      title="Set up plan"
      titleFont={30}
      additionalLink={{
        text: "Workouts",
        path: "/",
      }}
    >
      <WorkoutWeek week={week} />
    </MainLayout>
  );
};
