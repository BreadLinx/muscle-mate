import { create } from "zustand";
import { createNewExerciseRequest, getExercisesRequest } from "utils/api";
import { useAuth } from "store/authStore";
import { IExercise } from "types";

interface IExercisesState {
  exercises: IExercise[];

  getExercisesRequestData: {
    request: boolean;
    error: boolean;
    errorMessage: string | undefined;
    success: boolean;
  };
  createExerciseRequestData: {
    request: boolean;
    error: boolean;
    errorMessage: string | undefined;
    success: boolean;
  };
  getExercises: () => void;
  createExercise: (formData: FormData) => void;
}

export const useExercises = create<IExercisesState>((set, get) => ({
  exercises: [],

  getExercisesRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },
  createExerciseRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },
  getExercises: async () => {
    set({
      getExercisesRequestData: {
        request: true,
        success: false,
        error: false,
        errorMessage: "",
      },
    });
    const response = (await getExercisesRequest()) as {
      success: boolean;
      data: IExercise[];
    };
    set(state => ({
      exercises: [...response.data],
      getExercisesRequestData: {
        ...state.getExercisesRequestData,
        request: false,
        success: true,
      },
    }));
    console.log(response);
  },
  createExercise: async formData => {
    set({
      createExerciseRequestData: {
        request: true,
        success: false,
        error: false,
        errorMessage: "",
      },
    });
    const response = (await createNewExerciseRequest(formData)) as any;
    if (response.success) {
      set(state => ({
        exercises: [...state.exercises, ...response.data],
        createExerciseRequestData: {
          ...state.createExerciseRequestData,
          request: false,
          success: true,
        },
      }));
    }
  },
}));
