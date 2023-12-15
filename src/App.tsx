import {
  bugAdded,
  bugRemoved,
  bugResolved,
  selectBugs,
  useAppDispatch,
  useAppSelector,
} from "./store/bugsSlice";

const App = () => {
  const bugs = useAppSelector(selectBugs);
  const dispatch = useAppDispatch();

  return (
    <div>
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
    </div>
  );
};

export default App;
