import { Dispatch } from "redux";
import { IResponse, IListResponse } from "../../../Api/types";
import apiClient, { fetchPayload } from "../../../Api/Client";

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type?: string, payload?: any) {
  return { type, payload };
}

const request = (type: string, loading: boolean) => {
  return { type, loading };
  //return typedAction("LOGIN_REQUEST", user);
};

const success = (action: string, data: IResponse<any> | IListResponse) => {
  return typedAction(action, data);
};

const failure = (action: string, error: any) => {
  return typedAction(action, error);
};

const removeAuth = (action: string) => {
  return typedAction(action);
};

export const FETCH_DATA = (params: any) => async (
  dispatch: Dispatch
): Promise<any> => {
  dispatch(request("FETCH_REQUEST", true));

  try {
    const payload = fetchPayload(params);
    const res: any = await apiClient.fetch(payload);
    await dispatch(success("FETCH_SUCCESS", res));
  } catch (error) {
    dispatch(failure("FETCH_FAILURE", error));
  }
};

export const Actions = {
  request,
  success,
  failure,
  removeAuth,
};
