import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
});
