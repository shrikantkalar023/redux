import { Middleware } from "@reduxjs/toolkit";

const logger =
  (param: object): Middleware =>
  // (store) =>
  () =>
  (next) =>
  (action) => {
    console.log("logging", param);
    next(action);
  };
export default logger;
