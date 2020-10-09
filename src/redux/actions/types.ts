export const FETCH = "FETCH_OFFERS";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export interface IStoreParams {
  type: string;
  id: string;
}

export interface IListParams {
  type: string;
  query: any;
}

export interface IUser {
  username?: string;
  password?: string;
  token?: string;
  [key: string]: any;
}
