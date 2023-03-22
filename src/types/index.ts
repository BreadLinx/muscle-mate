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
    monday: { name: ""; exercices: [] };
    tuesday: { name: ""; exercices: [] };
    wednesday: { name: ""; exercices: [] };
    thursday: { name: ""; exercices: [] };
    friday: { name: ""; exercices: [] };
    saturday: { name: ""; exercices: [] };
    sunday: { name: ""; exercices: [] };
  };
  __v: number;
}
