const { createStore } = require("redux");

const initialState = {
  age: 21,
};
const myReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += 1;
  }
  return newState;
};

const store = createStore(myReducer);
store.subscribe(() => {
  console.log("state.change" + JSON.stringify(store.getState()));
  console.log(initialState);
});
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
