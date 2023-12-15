import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";

interface ProjectPayload {
  id?: number;
  name?: string;
}

// Define a type for the slice state
interface ProjectState {
  id: number;
  name: string;
}

// Define the initial state using that type
const initialState: ProjectState[] = [];

let lastId = 0;

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectAdded: (project, action: PayloadAction<ProjectPayload>) => {
      project.push({
        id: ++lastId,
        name: action.payload.name || "",
      });
    },
    projectRemoved: (project, action: PayloadAction<ProjectPayload>) => {
      if (typeof action.payload.id === "number")
        project.splice(action.payload.id - 1, 1);
    },
  },
});

export const { projectAdded, projectRemoved } = projectsSlice.actions;

export const selectProjects = (state: RootState) => state.projects;

export default projectsSlice.reducer;
