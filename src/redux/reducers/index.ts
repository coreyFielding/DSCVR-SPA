import { combineReducers } from "redux";
import AuthReducer from "./auth";
import GenericReducer from "./generic";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  generic: GenericReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
