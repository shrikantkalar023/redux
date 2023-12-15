import { configureStore } from "@reduxjs/toolkit";
import bugsReducer from "./bugsSlice";

export const store = configureStore({ reducer: { bugs: bugsReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
