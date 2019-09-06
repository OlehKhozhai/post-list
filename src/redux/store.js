import { createStore, applyMiddleware, combineReducers } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  postList: postReducer,
  user: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
