import { LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS } from "../actions/types";

interface AuthState {
  user: any;
  error: Object | null;
  loading: boolean;
}

const user = localStorage.getItem("user");
const parseUser = (data: any) => {
  if (!data) return {};
  if (typeof data === "object") return data;
  if (typeof data === "string") return JSON.parse(data);
};

const initialState: AuthState = {
  user: parseUser(localStorage.getItem("user")),
  error: null,
  loading: false,
};

const AuthReducer = (state = initialState, action: any) => {
  if (user == null && user == undefined)
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
