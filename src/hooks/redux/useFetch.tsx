import { useCallback, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { FETCH_DATA } from "../../redux/actions/generic";

export function useFetch(params: any) {
  const dispatch = useDispatch();
  const { data, pending } = useSelector(
    (state: RootState) => ({
      data: state.generic.data,
      pending: state.generic.pending,
    }),
    shallowEqual
  );

  const boundAction = useCallback(
    (params) => {
      return dispatch(FETCH_DATA(params));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!data && params) boundAction(params);
  }, [params]);

  return { data, pending };
}
