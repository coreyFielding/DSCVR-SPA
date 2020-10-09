import { IListParams } from "../types";
import { IResponse, IListResponse } from "../../../Api/types";

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type?: string, payload?: any) {
  return { type, payload };
}

const request = (type: string) => {
  return { type };
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

export const Actions = {
  request,
  success,
  failure,
  removeAuth,
};
