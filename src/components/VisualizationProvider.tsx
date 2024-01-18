import { DispatchWithoutAction, createContext, useReducer } from 'react';

type State = {
  test: number;
};

const initialState: State = { test: 1 };

function myReducer(oldState: State) {
  return { test: oldState.test + 1 };
}

export const VisualizationContext = createContext<State>(initialState);
export const VisualizationDispatchContext = createContext(
  {} as DispatchWithoutAction
);

export function Visualizationprovider(props: any) {
  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <VisualizationContext.Provider value={state}>
      <VisualizationDispatchContext.Provider value={dispatch}>
        {props.children}
      </VisualizationDispatchContext.Provider>
    </VisualizationContext.Provider>
  );
}
