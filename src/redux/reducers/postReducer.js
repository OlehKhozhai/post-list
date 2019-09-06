import {
  GET_POSTS_REQUEST,
  GET_POSTS_RESPONSE,
  GET_POSTS_ERROR,
  GET_POST_COMMENTS_REQUEST,
  GET_POST_COMMENTS_RESPONSE,
  GET_POST_COMMENTS_ERROR,
  GET_POST_REQUEST,
  GET_POST_RESPONSE,
  GET_POST_ERROR,
  LOAD_MORE_ITEMS
} from "../constants";

const initialState = {
  postList: [],
  currentPost: { post: {}, comments: [] },
  visibleItemCounter: 50,
  isLoading: false,
  isError: false
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_REQUEST:
    case GET_POST_COMMENTS_REQUEST:
    case GET_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_POSTS_ERROR:
    case GET_POST_COMMENTS_ERROR:
    case GET_POST_ERROR:
      return {
        ...state,
        isLoading: false
      };

    case GET_POSTS_RESPONSE:
      return {
        ...state,
        postList: [...payload],
        isLoading: false
      };

    case GET_POST_COMMENTS_RESPONSE:
      return {
        ...state,
        currentPost: { ...state.currentPost, comments: [...payload] },
        isLoading: false
      };

    case GET_POST_RESPONSE:
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          post: { ...payload }
        }
      };
    case LOAD_MORE_ITEMS:
      const {
        postList,
        visibleItemCounter,
        currentPost: { comments }
      } = state;

      const itemsArray = payload === "post" ? postList : comments;
      const incrementNumber = payload === "post" ? 20 : 100;

      return {
        ...state,
        visibleItemCounter:
          itemsArray.length > visibleItemCounter
            ? visibleItemCounter + incrementNumber
            : visibleItemCounter
      };

    default:
      return state;
  }
};

export default postReducer;
