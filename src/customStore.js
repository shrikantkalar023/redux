import reducer from "./reducer";

const createStore = (reducer) => {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  const getState = () => state;
  return {
    getState,
    dispatch,
  };
};

export default createStore(reducer);
