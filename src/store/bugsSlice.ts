import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";

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
    bugAdded: (bugs, action: PayloadAction<BugPayload>) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description || "",
        resolved: false,
      });
    },
    bugRemoved: (bugs, action: PayloadAction<BugPayload>) => {
      if (typeof action.payload.id === "number")
        bugs.splice(action.payload.id - 1, 1);
    },
    bugResolved: (bugs, action: PayloadAction<BugPayload>) => {
      if (typeof action.payload.id === "number")
        bugs[action.payload.id - 1].resolved = true;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = bugsSlice.actions;

export const selectBugs = (state: RootState) => state.bugs;

export default bugsSlice.reducer;
