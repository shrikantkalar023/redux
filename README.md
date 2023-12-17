# **Learning Redux**

This is the repo i created and updated while learning Redux. **-Shrikant Kalar**

dist folder is required for the proj to work.

## Notes

### Functional Programming Section

1. To solve problems using small & reusable fns which receive input & give output. They dont MUTATE data.

2. In JS fns can be treated as any other objs.

   -assigned to a var.

   -passed as argument.

   -returned from other fns.

3. Higher Order Fns: takes fn as input or returns it or both.

4. Currying: changing a fn having n args into a fn having 1 arg.

5. Redux follows Pure fns & Immutability principles.

6. In Redux, we store our app state inside a JS obj called 'store'. It is single source of truth.

7. Reducers:- Fn which takes current state & 'action' as input & returns new state as output. Based on type of action, it will know what properties to update in state.

8. Action is an 'obj' which has a 'type' property (\*required) & other properties which are used to update state.

9. Action is dispatched to store, store calls reducer, reducer updates state, store notifies UI about state change.

10. STEPS: Design store, define actions, create reducers, set up store.

11. UI components should subscribe to store to get notified about state changes. Unsubscribe when component is unmounted.

12. Action types: strings which describe action. Defined as constants.

13. Action creators: fns which return action objs.

14. Better File Structure: src/store/feature/actions.js, actionTypes.js, reducers.js . Feature e.g. auth, form etc. or Better yet use Ducks pattern.

15. In a **Complicated App** it is better to store All state in redux. The more state in reudx, the more we can get out of redux.

16. Use Array to **preserve Order**, Object for **quick lookup**.

17. Store structure: top level slices-> entities(data), auth, ui etc.

18. **Data normalization**: get rid of duplicate data & Connect related data using identifiers. _paularmstrong/normalizr_ library.

19. **Selectors**: fns which take state & return computed state.

20. **Memoization**: technique to optimize expensive fns. caching the result of fn call & return cached result when same input is provided. _reselect_ library & _createSelector_ fn.
