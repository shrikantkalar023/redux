import { Middleware } from "@reduxjs/toolkit";

const func: Middleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      action(dispatch, getState);
      console.log("func Middleware");
    } else next(action);
  };
export default func;
