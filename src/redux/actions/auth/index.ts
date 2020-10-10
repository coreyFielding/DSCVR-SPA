import { authConstants } from "../../constants";
import { login, logout, batch } from "../../../Api/services";
import history from "../../../helpers/history";
import { IUser } from "../types";
import { Dispatch } from "redux";
import { Actions } from "../generic";

const { request, success, failure, removeAuth } = Actions;

export const LOGIN = (payload: IUser) => async (
  dispatch: Dispatch
): Promise<any> => {
  dispatch(request("LOGIN_REQUEST"));

  const res = await login(payload);
  await dispatch<any>(FETCH());
  //else dispatch(failure("LOGIN_FAILURE", res.error));
};

export const LOGOUT = () => async (dispatch: Dispatch): Promise<any> => {
  await logout();
  localStorage.clear();
  dispatch(removeAuth("LOGOUT_REQUEST"));
  history.push("/login");
};

export const FETCH = () => async (dispatch: any) => {
  try {
    const batch_req = await batch([
      { url: "/users/~", id: "1", method: "GET" },
      { url: "/users/{1}/manages", id: "2", method: "GET", context: ["1.id"] },
      {
        url: "/merchants/{1}?fields=id,name",
        id: "3",
        method: "GET",
        context: ["2.items.0.id"],
        lest: true,
      },
    ]);

    let res = batch_req.data.responses;
    let user = res[0].body;

    user.$merchant = res[2] && res[2].status < 300 ? res[2].body : { name: "" };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(success("LOGIN_SUCCESS", user));
    history.push("/");
  } catch (error) {}
};

export type AuthAction = ReturnType<typeof LOGIN>;
