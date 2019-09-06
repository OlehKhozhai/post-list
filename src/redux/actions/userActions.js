import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_RESPONSE,
  GET_USER_ERROR,
  BASE_URL
} from "../constants";

export const getUserAction = id => dispatch => {
  dispatch({ type: GET_USER_REQUEST });

  axios
    .get(`${BASE_URL}/users/${id}`)
    .then(({ data }) => dispatch({ type: GET_USER_RESPONSE, payload: data }))
    .catch(error => dispatch({ type: GET_USER_ERROR, payload: error }));
};
