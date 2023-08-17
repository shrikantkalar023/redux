import { bugAdded, bugRemoved, bugResolved } from "./actions";
import store from "./store";

// subscribing and unsubscribing to the store
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// dispatching actions
store.dispatch(bugAdded("Bug 1"));

// internally redux does the following
// state = reducer(state, action)
// notify the subscribers

// get the state
console.log(store.getState());

store.dispatch(bugResolved(1));
console.log(store.getState());

store.dispatch(bugRemoved(1));
console.log(store.getState());
