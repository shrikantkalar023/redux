import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";

// Define a type for the slice state
interface BugState {
  id: number;
  description: string;
  resolved: boolean;
  assignedTeamMemberId?: number;
}

// Define the initial state using that type
const initialState: BugState[] = [];

let lastId = 0;

export const bugsSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    bugAdded: (bugs, action: PayloadAction<{ description: string }>) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (bugs, action: PayloadAction<{ id: number }>) => {
      bugs.splice(action.payload.id - 1, 1);
    },
    bugResolved: (bugs, action: PayloadAction<{ id: number }>) => {
      bugs[action.payload.id - 1].resolved = true;
    },
    bugAssigned: (
      bugs,
      action: PayloadAction<{ bugId: number; memberId: number }>
    ) => {
      bugs[action.payload.bugId - 1].assignedTeamMemberId =
        action.payload.memberId;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved, bugAssigned } =
  bugsSlice.actions;

export const selectBugs = (state: RootState) => state.bugs;
export default bugsSlice.reducer;

export const unresolvedBugs = createSelector(
  (state) => state.bugs,
  (state) => state.projects,
  (bugs, projects) => [
    ...bugs.filter((bug: BugState) => !bug.resolved),
    ...projects,
  ]
);

export const bugsByMemberId = (id: number) =>
  createSelector(
    (state: RootState) => state.bugs,
    (bugs) => bugs.filter((bug: BugState) => bug.assignedTeamMemberId === id)
  );
