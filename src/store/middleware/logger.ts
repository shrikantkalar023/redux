import { Middleware } from "@reduxjs/toolkit";

const logger =
  (param: object): Middleware =>
  (store) =>
  (next) =>
  (action) => {
    console.log("logging", param);
    console.log("store", store);
    next(action);
  };
export default logger;
