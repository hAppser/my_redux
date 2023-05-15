const useCustomRedux = () => {
  const createStore = (reducer) => {
    let state = reducer(undefined, { type: "init" });
    const subsribers = [];
    return {
      getState: () => state,
      dispatch: (action) => {
        state = reducer(state, action);
        subsribers.forEach((subsriber) => subsriber());
      },
      subsribe: (subsriber) => {
        subsribers.push(subsriber);
        return () => {
          subsribers.splice(subsribers.indexOf(subsriber), 1);
        };
      },
    };
  };
  const initialState = {
    count: 0,
  };

  const counter = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + action.payload,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - action.payload,
        };
      default:
        return { ...state };
    }
  };

  const store = createStore(counter);
  return store;
};
export default useCustomRedux;
