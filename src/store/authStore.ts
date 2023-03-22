import { create } from "zustand";
import {
  SERVER_URL,
  patchProfileAvatarRequest,
  loginRequest,
  getMeRequest,
  signupRequest,
  signOutRequest,
  createNewUserExerciseRequest,
} from "utils/api";
import { setCookie, deleteCookie } from "utils/cookies";
import { IUser } from "types";
import { IExercise, IWorkoutDay, IRequestStates, Tdays } from "types";

interface IAuthState {
  isUserAuthorized: boolean | undefined;
  name: string;
  email: string;
  avatarUrl: string;
  userExercises: IExercise[];
  role: string;
  workouts: Record<Tdays, IWorkoutDay>;
  signupRequestData: IRequestStates;
  loginRequestData: IRequestStates;
  signoutRequestData: IRequestStates;
  getMeRequestData: IRequestStates;
  createUserExerciseRequestData: IRequestStates;

  signup: (data: { name: string; email: string; password: string }) => void;
  login: (data: { email: string; password: string }) => void;
  patchProfileAvatar: (fromData: FormData) => void;
  getMe: () => void;
  setUserAuthorizedFalse: () => void;
  signout: () => void;
  resetUserInfo: () => void;
  createUserExercise: (formData: FormData) => void;

  addClientExercise: (day: Tdays, exerciseCard: IExercise) => void;
}

export const useAuth = create<IAuthState>((set, get) => ({
  isUserAuthorized: undefined,
  name: "",
  email: "",
  avatarUrl: "",
  userExercises: [],
  role: "",
  workouts: {
    monday: {
      name: "",
      completed: false,
      exercises: [],
    },
    tuesday: {
      name: "",
      completed: false,
      exercises: [],
    },
    wednesday: {
      name: "",
      completed: false,
      exercises: [],
    },
    thursday: {
      name: "",
      completed: false,
      exercises: [],
    },
    friday: {
      name: "",
      completed: false,
      exercises: [],
    },
    saturday: {
      name: "",
      completed: false,
      exercises: [],
    },
    sunday: {
      name: "",
      completed: false,
      exercises: [],
    },
  },

  signupRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },
  loginRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },
  signoutRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },
  getMeRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },
  createUserExerciseRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },

  setUserAuthorizedFalse: () => {
    set({
      isUserAuthorized: false,
    });
  },

  resetUserInfo: () => {
    set({
      name: "",
      email: "",
      avatarUrl: "",
    });
  },

  signup: async data => {
    set({
      signupRequestData: {
        request: true,
        success: false,
        error: false,
        errorMessage: "",
      },
    });

    const response = (await signupRequest(data)) as {
      success: boolean;
      userData: IUser;
      authToken: string;
      refreshToken: string;
    };

    set(state => ({
      isUserAuthorized: true,
      name: response.userData.name,
      email: response.userData.email,
      avatarUrl: `${SERVER_URL}${response.userData.avatarUrl}`,
      userExercises: [...response.userData.userExercises],
      role: "",
      workouts: { ...response.userData.workouts },

      signupRequestData: {
        ...state.signupRequestData,
        request: false,
        success: true,
      },
    }));

    setCookie("authToken", response.authToken);
    setCookie("refreshToken", response.refreshToken);
  },

  login: async data => {
    set({
      loginRequestData: {
        request: true,
        success: false,
        error: false,
        errorMessage: "",
      },
    });

    const response = (await loginRequest(data)) as {
      success: boolean;
      userData: IUser;
      authToken: string;
      refreshToken: string;
    };

    set(state => ({
      isUserAuthorized: true,
      name: response.userData.name,
      email: response.userData.email,
      avatarUrl: `${SERVER_URL}${response.userData.avatarUrl}`,
      userExercises: [...response.userData.userExercises],
      role: "",
      workouts: { ...response.userData.workouts },

      loginRequestData: {
        ...state.loginRequestData,
        request: false,
        success: true,
      },
    }));

    setCookie("authToken", response.authToken);
    setCookie("refreshToken", response.refreshToken);
  },

  patchProfileAvatar: async (formData: FormData) => {
    // set({ loading: true });
    const response = (await patchProfileAvatarRequest(formData)) as {
      success: boolean;
      filePath: string;
    };
    set({
      // loading: false,
      avatarUrl: `${SERVER_URL}${response.filePath}`,
    });
  },

  getMe: async () => {
    try {
      set({
        getMeRequestData: {
          request: true,
          success: false,
          error: false,
          errorMessage: "",
        },
      });

      const response = (await getMeRequest()) as any;

      if (
        !response.success &&
        (response.message === "invalid signature" ||
          response.message === "jwt malformed")
      ) {
        set(state => ({
          isUserAuthorized: false,
          getMeRequestData: {
            ...state.getMeRequestData,
            request: false,
            error: true,
            errorMessage: response.message,
          },
        }));
        deleteCookie("authToken");
        return;
      }

      set(state => ({
        isUserAuthorized: true,
        name: response.userData.name,
        email: response.userData.email,
        avatarUrl: `${SERVER_URL}${response.userData.avatarUrl}`,
        workouts: { ...response.userData.workouts },
        userExercises: [...response.userData.userExercises],
        getMeRequestData: {
          ...state.getMeRequestData,
          request: false,
          success: true,
        },
      }));
    } catch (err) {
      set(state => ({
        isUserAuthorized: false,
        getMeRequestData: {
          ...state.getMeRequestData,
          request: false,
          error: true,
          errorMessage: "fail",
        },
      }));
    }
  },

  signout: async () => {
    set({
      signoutRequestData: {
        request: true,
        success: false,
        error: false,
        errorMessage: "",
      },
    });

    await signOutRequest();

    set(state => ({
      isUserAuthorized: false,
      name: "",
      email: "",
      avatarUrl: "",

      signoutRequestData: {
        ...state.signupRequestData,
        request: false,
        success: true,
      },
    }));

    deleteCookie("authToken");
    deleteCookie("refreshToken");
  },

  createUserExercise: async formData => {
    set({
      createUserExerciseRequestData: {
        request: true,
        success: false,
        error: false,
        errorMessage: "",
      },
    });
    const response = (await createNewUserExerciseRequest(formData)) as any;
    if (response.success) {
      set(state => ({
        userExercises: [...state.userExercises, ...response.data],
        createUserExerciseRequestData: {
          ...state.createUserExerciseRequestData,
          request: false,
          success: true,
        },
      }));
    }
  },

  addClientExercise: (day, exerciseCard) => {
    console.log(day, exerciseCard);

    set(state => {
      if (state.workouts) {
        const tempWorkout: Record<Tdays, IWorkoutDay> = structuredClone(
          state.workouts,
        );
        console.log(tempWorkout[day]);

        tempWorkout[day] = {
          ...tempWorkout[day],
          exercises: [
            ...tempWorkout[day].exercises,
            {
              exerciseId: exerciseCard._id,
              name: exerciseCard.name,
              image: exerciseCard.image,
              weight: 0,
              weightIncrease: 0,
              repeats: 0,
              timesPerRepeat: 0,
              completed: false,
            },
          ],
        };

        return {
          workouts: { ...tempWorkout },
        };
      }
      return { ...state };
    });
  },
  setClientExerciseSetting: () => {
    set(state => ({}));
  },
}));
