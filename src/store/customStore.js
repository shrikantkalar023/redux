import reducer from "./reducer";

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    for (const i in listeners) {
      if (Object.hasOwnProperty.call(listeners, i)) {
        listeners[i]();
      }
    }
  };

  const getState = () => state;
  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default createStore(reducer);
