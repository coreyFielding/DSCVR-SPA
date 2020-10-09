import { combineReducers } from "redux";
import AuthReducer from "./auth";
import TribeReducer from "./tribes";
import GenericReducer from "./generic";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  tribes: TribeReducer,
  //generic: GenericReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
