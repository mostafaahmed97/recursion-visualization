import { useReducer } from 'react';

// reducer takes in the state & payload fom dispatch
export function visualizationReducer(testState: any, action: any) {
  console.log({ testState, action });
  return { test: (testState.test as number) + 1 };
}

// const [state, dispatch] = useReducer(visualizationReducer, { test: 1 });
// export { state, dispatch };
// context
