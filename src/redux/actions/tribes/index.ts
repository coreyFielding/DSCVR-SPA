import { tribeConstants } from "../../constants";
import { Dispatch, AnyAction } from "redux";
import { Actions } from "../generic";
import { get } from "../../../Api/services";
import apiClient, { fetchPayload } from "../../../Api/Client";
import { IListParams } from "../types";
const { request, success, failure, removeAuth } = Actions;

export const FETCH_TRIBES = (params: any) => async (
  dispatch: Dispatch
): Promise<any> => {
  dispatch(request("FETCH_TRIBES"));
  try {
    const payload = fetchPayload(params);
    console.log("payload", payload);
    const res: any = await apiClient.fetch(payload);
    console.log(res);
    await dispatch(success("FETCH_SUCCESS", res));
  } catch (err) {
    dispatch(failure("FETCH_FAILURE", err));
  }
};
