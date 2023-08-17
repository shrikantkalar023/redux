# **Learning Redux**

This is the repo i created and updated while learning Redux. **-Shrikant Kalar**

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
