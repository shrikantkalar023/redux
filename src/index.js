import store from "./customStore";
import * as actions from "./actions";

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugResolved(1));
console.log(store.getState());
