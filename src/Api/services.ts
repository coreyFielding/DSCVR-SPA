import axios from "axios";
import { ApiRequest, IResponse } from "./types";
import { IUser } from "../redux/actions/types";
const APP_API_URL = process.env.REACT_APP_API_URL;

export async function login(payload: any) {
  return retrieveToken("/authenticate", payload);
}

export async function retrieveToken(url: string, payload: IUser) {
  const post = await axios.post(APP_API_URL + url, payload);
  const res = handleResponse(post);
  const token = res.token;

  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }

  return res;
}

export function handleResponse(res: any) {
  const data = res.data;

  if (data.error) {
    //if (res.status === 401) logout();

    return Promise.reject(data.error);
  }

  return data;
}

export function logout() {
  // TODO - not working
  axios.get(APP_API_URL + "/logout").then(() => {
    delete axios.defaults.headers.common["Authorization"];
  });
}

export function get(url: string): IResponse<any> {
  return axios.get(APP_API_URL + url).then(handleResponse);
}

export const batch = (requests: ApiRequest[]) => {
  return axios.post(APP_API_URL + "/batch", { requests });
};
