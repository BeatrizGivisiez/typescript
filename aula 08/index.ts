// Generics

function useState<T extends string | number = string>() {
  let state: T;

  function getState() {
    return state;
  }

  function setState(stateValue: T) {
    state = stateValue;
  }

  return { getState, setState };
}

const state = useState<string | number>();

state.setState("Beatriz Givisiez");
console.log(state.getState());

state.setState(30);
console.log(state.getState());
