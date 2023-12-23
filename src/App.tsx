import {
  bugAdded,
  bugAssigned,
  bugRemoved,
  bugResolved,
  bugsByMemberId,
  selectBugs,
} from "./store/bugsSlice";
import { useAppSelector, useAppDispatch } from "./store/configureStore";
import {
  projectAdded,
  projectRemoved,
  selectProjects,
} from "./store/projectsSlice";
import { memberAdded, memberRemoved, selectTeam } from "./store/teamSlice";

const App = () => {
  const dispatch = useAppDispatch();

  const bugs = useAppSelector(selectBugs);
  const projects = useAppSelector(selectProjects);
  const team = useAppSelector(selectTeam);
  const bugsByTeamMember = useAppSelector(bugsByMemberId(2));

  console.log(bugsByTeamMember);

  const memberAssigned = (bugId: number, memberId: number) => {
    dispatch(bugAssigned({ bugId, memberId }));
  };

  return (
    <div>
      <h1>Bugs</h1>
      <button
        onClick={() => {
          dispatch(bugAdded({ description: `Bug ${bugs.length + 1}` }));
          dispatch((dispatch, getState) => {
            console.log("thunk", getState());
            // FIXME: below code testing only. remove it later
            dispatch(bugAdded({ description: `Bug ${bugs.length + 1}` }));
          });
        }}
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
          <select
            onChange={(e) =>
              memberAssigned(bug.id, parseInt(e.currentTarget.value))
            }
          >
            {team.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </li>
      ))}
      <h1>Team</h1>
      <button
        onClick={() =>
          dispatch(memberAdded({ name: `Member ${team.length + 1}` }))
        }
      >
        Add Member
      </button>
      <button onClick={() => dispatch(memberRemoved({ id: team.length }))}>
        Remove Member
      </button>
      {team.map((team) => (
        <li key={team.id}>{team.name}</li>
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
