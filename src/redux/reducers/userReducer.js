import {
  GET_USER_REQUEST,
  GET_USER_RESPONSE,
  GET_USER_ERROR
} from "../constants";

const initialState = {
  data: {},
  isLoading: false,
  isError: false
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_USER_RESPONSE:
      return {
        ...state,
        data: { ...payload },
        isLoading: false
      };

    case GET_USER_ERROR:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};

export default userReducer;
