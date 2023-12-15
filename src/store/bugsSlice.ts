import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./configureStore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface BugPayload {
  description?: string;
  id?: number;
}

// Define a type for the slice state
interface BugState {
  id: number;
  description: string;
  resolved: boolean;
}

// Define the initial state using that type
const initialState: BugState[] = [];

let lastId = 0;

export const bugsSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    bugAdded: (state, action: PayloadAction<BugPayload>) => {
      state.push({
        id: ++lastId,
        description: action.payload.description || "",
        resolved: false,
      });
    },
    bugRemoved: (state, action: PayloadAction<BugPayload>) => {
      if (typeof action.payload.id === "number")
        state.splice(action.payload.id - 1, 1);
    },
    bugResolved: (state, action: PayloadAction<BugPayload>) => {
      if (typeof action.payload.id === "number")
        state[action.payload.id - 1].resolved = true;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = bugsSlice.actions;

export const selectBugs = (state: RootState) => state.bugs;

export default bugsSlice.reducer;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
