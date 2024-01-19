import { DispatchWithoutAction, createContext, useReducer } from 'react';

import { algorithms } from '../algorithms';

type State = {
  displayCode: string;
  availableAlgorithms: typeof algorithms;
  selectedAlgorithm: string;
};

const initialState: State = {
  selectedAlgorithm: algorithms[0].name,
  displayCode: algorithms[0].displayCode,
  availableAlgorithms: algorithms,
};

function myReducer(oldState: State) {
  return oldState;
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
