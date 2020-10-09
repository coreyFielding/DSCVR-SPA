import { LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS } from "../actions/types";

interface AuthState {
  user: any;
  error: Object | null;
  loading: boolean;
}

const user = localStorage.getItem("user");
const initialState: AuthState = {
  user: user || null,
  error: null,
  loading: false,
};

const AuthReducer = (state = initialState, action: any) => {
  console.log("action", action, "user", initialState.user);
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        user: null,
      };

    default:
      state;
  }

  return state;
};

export default AuthReducer;
