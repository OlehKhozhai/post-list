import axios from "axios";
import {
  GET_POST_COMMENTS_REQUEST,
  GET_POST_COMMENTS_RESPONSE,
  GET_POST_COMMENTS_ERROR,
  GET_POST_REQUEST,
  GET_POST_RESPONSE,
  GET_POST_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_RESPONSE,
  GET_POSTS_ERROR,
  BASE_URL,
  LOAD_MORE_ITEMS
} from "../constants";

export const getPostsAction = () => dispatch => {
  dispatch({ type: GET_POSTS_REQUEST });

  axios
    .get(`${BASE_URL}/posts`)
    .then(({ data }) => dispatch({ type: GET_POSTS_RESPONSE, payload: data }))
    .catch(error => dispatch({ type: GET_POSTS_ERROR, payload: error }));
};

export const getPostCommentsAction = id => dispatch => {
  dispatch({ type: GET_POST_COMMENTS_REQUEST });

  axios
    .get(`${BASE_URL}/posts/${id}/comments`)
    .then(({ data }) =>
      dispatch({ type: GET_POST_COMMENTS_RESPONSE, payload: data })
    )
    .catch(error =>
      dispatch({ type: GET_POST_COMMENTS_ERROR, payload: error })
    );
};

export const getPostAction = id => dispatch => {
  dispatch({ type: GET_POST_REQUEST });

  axios
    .get(`${BASE_URL}/posts/${id}`)
    .then(({ data }) => dispatch({ type: GET_POST_RESPONSE, payload: data }))
    .catch(error => dispatch({ type: GET_POST_ERROR, payload: error }));
};

export const loadMoreItemsAction = payload => ({
  type: LOAD_MORE_ITEMS,
  payload
});
