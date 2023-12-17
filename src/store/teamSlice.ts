import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";

// Define a type for the slice state
export interface TeamMember {
  id: number;
  name: string;
}

// Define the initial state using that type
const initialState: TeamMember[] = [];

let lastId = 0;

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    memberAdded: (member, action: PayloadAction<{ name: string }>) => {
      member.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
    memberRemoved: (member, action: PayloadAction<{ id: number }>) => {
      member.splice(action.payload.id - 1, 1);
    },
  },
});

export const { memberAdded, memberRemoved } = teamSlice.actions;

export const selectTeam = (state: RootState) => state.team;

export default teamSlice.reducer;
