import { create } from "zustand";
import { getPostsRequest, createPostRequest } from "utils/api";
import { IPost } from "types";
import { useAuth } from "store/authStore";

interface IPostsState {
  posts: IPost[];
  skip: number;
  getPostsRequestData: {
    request: boolean;
    error: boolean;
    errorMessage: string | undefined;
    success: boolean;
  };
  createPostRequestData: {
    request: boolean;
    error: boolean;
    errorMessage: string | undefined;
    success: boolean;
  };
  getPosts: (skipParam: number) => void;
  createPost: (data: { text: string }) => void;
}

const usePosts = create<IPostsState>((set, get) => ({
  posts: [],
  skip: 0,

  getPostsRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },
  createPostRequestData: {
    request: false,
    error: false,
    errorMessage: "",
    success: false,
  },

  getPosts: async skipParam => {
    set({
      getPostsRequestData: {
        request: true,
        success: false,
        error: false,
        errorMessage: "",
      },
    });

    const posts = (await getPostsRequest(skipParam)) as IPost[];

    if (posts?.length === 0) {
      set(state => ({
        getPostsRequestData: {
          ...state.getPostsRequestData,
          request: false,
          success: true,
        },
      }));
      return;
    }

    set(state => ({
      posts: [...state.posts, ...posts],
      skip: state.skip + 20,
      getPostsRequestData: {
        ...state.getPostsRequestData,
        request: false,
        success: true,
      },
    }));
  },

  createPost: async data => {
    set({
      createPostRequestData: {
        request: true,
        success: false,
        error: false,
        errorMessage: "",
      },
    });

    const response = (await createPostRequest(data)) as any;
    if (response.success) {
      set(state => ({
        posts: [{ ...response.data }, ...state.posts],
        createPostRequestData: {
          ...state.createPostRequestData,
          request: false,
          success: true,
        },
      }));
    }
  },
}));

export { useAuth, usePosts };
