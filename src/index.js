import * as actions from "./actionTypes";
import store from "./store";

// subscribing and unsubscribing to the store
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// dispatching actions
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

// internally redux does the following
// state = reducer(state, action)
// notify the subscribers

// get the state
console.log(store.getState());

// unsubscribing
unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
