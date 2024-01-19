import { Dispatch, createContext, useReducer } from 'react';

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

type UpdateSelectedAlgorithmAction = {
  type: 'update_selection';
  algorithmName: string;
};

type DispatchAction = UpdateSelectedAlgorithmAction;

function myReducer(oldState: State, payload: DispatchAction): State {
  const newAlg = algorithms.find(a => a.name == payload.algorithmName);
  if (!newAlg) return oldState;

  return {
    ...oldState,
    selectedAlgorithm: newAlg.name,
    displayCode: newAlg.displayCode,
  };
}

export const VisualizationContext = createContext<State>(initialState);
export const VisualizationDispatchContext = createContext(
  {} as Dispatch<DispatchAction>
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
