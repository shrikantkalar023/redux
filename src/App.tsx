import {
  bugAdded,
  bugRemoved,
  bugResolved,
  selectBugs,
} from "./store/bugsSlice";
import { useAppSelector, useAppDispatch } from "./store/configureStore";
import {
  projectAdded,
  projectRemoved,
  selectProjects,
} from "./store/projectsSlice";

const App = () => {
  const bugs = useAppSelector(selectBugs);
  const projects = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Bugs</h1>
      <button
        onClick={() =>
          dispatch(bugAdded({ description: `Bug ${bugs.length + 1}` }))
        }
      >
        Add Bug
      </button>
      <button onClick={() => dispatch(bugResolved({ id: bugs.length }))}>
        Resolve Bug
      </button>
      <button onClick={() => dispatch(bugRemoved({ id: bugs.length }))}>
        Remove Bug
      </button>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description} + {bug.resolved ? "Resolved" : "Not Resolved"}
        </li>
      ))}
      <h1>Projects</h1>
      <button
        onClick={() =>
          dispatch(projectAdded({ name: `Project ${projects.length + 1}` }))
        }
      >
        Add Project
      </button>
      <button onClick={() => dispatch(projectRemoved({ id: projects.length }))}>
        Remove Project
      </button>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </div>
  );
};

export default App;
