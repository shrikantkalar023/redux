import { configureStore } from "@reduxjs/toolkit";
import bugsReducer from "./bugsSlice";
import projectsReducer from "./projectsSlice";
import teamReducer from "./teamSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "./middleware/logger";

export const store = configureStore({
  reducer: { bugs: bugsReducer, projects: projectsReducer, team: teamReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
