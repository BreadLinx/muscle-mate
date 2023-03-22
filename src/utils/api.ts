import ky from "ky";
import { getCookie, setCookie, deleteCookie } from "utils/cookies";
import { useAuth } from "store/authStore";
import { IExercise } from "types";

// export const SERVER_URL = "http://localhost:5000";
export const SERVER_URL = "https://muscle-mate-server.onrender.com";

const BASE_API_URL = `${SERVER_URL}/api`;
const EXERCISES_URL = `${BASE_API_URL}/exercises`;

const BASE_AUTH_URL = `${SERVER_URL}/auth`;
const AVATAR_URL = `${BASE_AUTH_URL}/me/avatar`;
const SIGNUP_URL = `${BASE_AUTH_URL}/signup`;
const LOGIN_URL = `${BASE_AUTH_URL}/login`;
const SIGNOUT_URL = `${BASE_AUTH_URL}/signout`;
const REFRESH_TOKEN_URL = `${BASE_AUTH_URL}/refreshToken`;
const SELF_PROFILE_URL = `${BASE_AUTH_URL}/me`;
const USER_EXERCISES_URL = `${BASE_API_URL}/auth/me/exercises`;

const authApi = ky.create({
  hooks: {
    afterResponse: [
      async (request, _options, _response) => {
        if (_response.status === 403) {
          const response = (await ky
            .post(REFRESH_TOKEN_URL, {
              headers: {
                Authorization: `Bearer ${getCookie("refreshToken")}`,
              },
              throwHttpErrors: false,
            })
            .json()) as { success: boolean; authToken: string };

          if (!response.success) {
            useAuth.getState().setUserAuthorizedFalse();
            useAuth.getState().resetUserInfo();

            deleteCookie("authToken");
            deleteCookie("refreshToken");
            return;
          }

          setCookie("authToken", response.authToken);
          request.headers.set("Authorization", `Bearer ${response.authToken}`);

          return ky(request);
        }
      },
    ],
  },
  headers: { Authorization: `Bearer ${getCookie("authToken")}` },
});

export const patchProfileAvatarRequest = async (formData: FormData) => {
  try {
    return await authApi
      .patch(AVATAR_URL, {
        body: formData,
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const getExercisesRequest = async () => {
  try {
    return (await ky.get(EXERCISES_URL).json()) as {
      success: boolean;
      data: IExercise[];
    };
  } catch (err) {
    console.log(err);
  }
};

export const createNewExerciseRequest = async (formData: FormData) => {
  try {
    return await authApi
      .post(EXERCISES_URL, {
        body: formData,
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const createNewUserExerciseRequest = async (formData: FormData) => {
  try {
    return await authApi
      .post(USER_EXERCISES_URL, {
        body: formData,
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const signupRequest = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    return ky
      .post(SIGNUP_URL, {
        json: {
          name,
          email,
          password,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const loginRequest = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    return ky
      .post(LOGIN_URL, {
        json: {
          email,
          password,
        },
      })
      .json();
  } catch (err) {
    console.log(err);
  }
};

export const getMeRequest = async () => {
  return authApi
    .get(SELF_PROFILE_URL, {
      throwHttpErrors: false,
    })
    .json();
};

export const signOutRequest = async () => {
  return authApi
    .post(SIGNOUT_URL, {
      json: { refreshToken: getCookie("refreshToken") },
      throwHttpErrors: false,
    })
    .json();
};
