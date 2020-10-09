interface ITribeState {
  data: any;
  error: any;
  loading: boolean;
}
const initialState: ITribeState = {
  data: null,
  error: null,
  loading: false,
};

const updateState = (prevState: ITribeState, newVals: any) => {
  return Object.assign({}, prevState, newVals);
};

const createReducer = (initialState: ITribeState, handlers: any) => {
  return function reducer(state = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

const fetchTribes = (state: ITribeState, action: any) => {
  return updateState(state, { data: !action.payload });
};
const TribeReducer = createReducer(null, {
  FETCH_TRIBES: fetchTribes,
});

export default TribeReducer;
