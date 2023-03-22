export type Tdays =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface IExercise {
  _id: string;
  name: string;
  tutorial: string;
  muscleGroups: string[];
  description: string;
  image: string;
  tutorialLink: string;
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface IUserWorkoutExercise {
  exerciseId: string;
  name: string;
  image: string;
  weight: number;
  weightIncrease: number;
  repeats: number;
  timesPerRepeat: number;
  completed: boolean;
}

export interface IRequestStates {
  request: boolean;
  error: boolean;
  errorMessage: string | undefined;
  success: boolean;
}

export interface IWorkoutDay {
  name: string;
  completed: boolean;
  exercises: IUserWorkoutExercise[];
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  userExercises: IExercise[];
  role: string;
  workouts: {
    monday: IWorkoutDay;
    tuesday: IWorkoutDay;
    wednesday: IWorkoutDay;
    thursday: IWorkoutDay;
    friday: IWorkoutDay;
    saturday: IWorkoutDay;
    sunday: IWorkoutDay;
  };
  __v: number;
}
