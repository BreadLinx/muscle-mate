import { create } from "zustand";
import {
  SERVER_URL,
  patchProfileAvatarRequest,
  loginRequest,
  getMeRequest,
  signupRequest,
  signOutRequest,
} from "utils/api";
import { setCookie, deleteCookie } from "utils/cookies";
import { IUser } from "types";

interface IAuthState {
  isUserAuthorized: boolean | undefined;
  name: string;
  email: string;
  avatarUrl: string;
  signupRequestData: {
    request: boolean;
    error: boolean;
    errorMessage: string | undefined;
    success: boolean;
  };
  loginRequestData: {
    request: boolean;
    error: boolean;
    errorMessage: string | undefined;
    success: boolean;
  };
  signoutRequestData: {
    request: boolean;
    error: boolean;
    errorMessage: string | undefined;
    success: boolean;
  };
  getMeRequestData: {
    request: boolean;
    error: boolean;
    errorMessage: string | undefined;
    success: boolean;
  };
  signup: (data: { name: string; email: string; password: string }) => void;
  login: (data: { email: string; password: string }) => void;
  patchProfileAvatar: (fromData: FormData) => void;
  getMe: () => void;
  setUserAuthorizedFalse: () => void;
  signout: () => void;
  resetUserInfo: () => void;
}

export const useAuth = create<IAuthState>((set, get) => ({
  isUserAuthorized: undefined,
  name: "",
  email: "",
  avatarUrl: "",

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
      (!response.success && response.message === "invalid signature") ||
      response.message === "jwt malformed"
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
      getMeRequestData: {
        ...state.getMeRequestData,
        request: false,
        success: true,
      },
    }));
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
}));
