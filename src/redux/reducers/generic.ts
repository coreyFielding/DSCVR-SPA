import ActionButton from "antd/lib/modal/ActionButton";

interface IPayload {
  id: string;
  type: string;
  mtime?: string;
  [key: string]: any;
}

interface IResource {
  pending: boolean;
  cache?: IPayload | null;
  data?: IPayload | null;
  type: string;
  name: string;
  id: string;
}

interface IResources {
  pending: boolean;
  data: IPayload[];
  type: string;
  total: number;
  name: string;
  query: any;
}

type ResourceType = IResource | IResources;

const initialState: ResourceType = {
  pending: false,
  cache: null,
  data: null,
  type: "",
  name: "",
  id: "",
};

const updateState = (prevState: ResourceType, newVals: any) => {
  return Object.assign({}, prevState, newVals);
};

const createReducer = (initialState: ResourceType, handlers: any) => {
  return function reducer(state = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

const fetch = (state: ResourceType, action: any) => {
  return updateState(state, { data: action.payload });
};

const pending = (state: ResourceType, action: any) => {
  return updateState(state, { pending: action.payload });
};

const GenericReducer = createReducer(initialState, {
  FETCH_SUCCESS: fetch,
  FETCH_REQUEST: pending,
});

export default GenericReducer;
