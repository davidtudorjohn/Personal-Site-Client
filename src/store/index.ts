import { combineReducers } from "redux";
import { systemReducer } from "./system/reducers";

const rootReducer = combineReducers({
  system: systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
