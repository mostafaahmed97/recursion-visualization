import { Dispatch, createContext, useReducer } from 'react';
import { Msg, generateDiagram } from '@/utils';

import { algorithms } from '../algorithms';
import { match } from 'ts-pattern';

type FactorialOptions = {
  n: number;
};

type MergeSortOptions = {
  numbers: number[];
};

type State = {
  displayCode: string;
  availableAlgorithms: typeof algorithms;
  selectedAlgorithm: string;
  steps: Msg[];
  generatedDiagram: string;
  factorialOptions: FactorialOptions;
  mergeSortOptions: MergeSortOptions;
};

const initialState: State = {
  selectedAlgorithm: algorithms[0].name,
  displayCode: algorithms[0].displayCode,
  availableAlgorithms: algorithms,
  steps: [],
  generatedDiagram: 'sequenceDiagram',
  factorialOptions: { n: 3 },
  mergeSortOptions: { numbers: [] },
};

type StartTraceAction = {
  type: 'start_trace';
};

type UpdateSelectedAlgorithmAction = {
  type: 'update_selection';
  algorithmName: string;
};

type UpdateFactorialOptions = {
  type: 'update_factorial_options';
  n: number;
};

type UpdateMergeSortOptions = {
  type: 'update_mergesort_options';
  numbersList: string;
};

type DispatchAction =
  | StartTraceAction
  | UpdateSelectedAlgorithmAction
  | UpdateFactorialOptions
  | UpdateMergeSortOptions;

function myReducer(oldState: State, payload: DispatchAction): State {
  const newState = match(payload)
    .with({ type: 'update_selection' }, matched => {
      const newAlg = algorithms.find(a => a.name == matched.algorithmName);
      if (!newAlg) return oldState;

      return {
        ...oldState,
        selectedAlgorithm: newAlg.name,
        displayCode: newAlg.displayCode,
      };
    })
    .with({ type: 'update_factorial_options' }, matched => {
      return {
        ...oldState,
        factorialOptions: { n: matched.n },
      };
    })
    .with({ type: 'update_mergesort_options' }, matched => {
      console.log({ matched });
      try {
        const strippedNumbers = matched.numbersList
          .trim()
          .replace(' ', '')
          .split(',');
        const numbers = strippedNumbers.map(n => Number(n));

        return {
          ...oldState,
          mergeSortOptions: { numbers },
        };
      } catch (error) {
        return oldState;
      }
    })
    .with({ type: 'start_trace' }, () => {
      const alg = algorithms.find(a => a.name == oldState.selectedAlgorithm);
      if (!alg) return oldState;

      const args = oldState.factorialOptions;
      const trace = alg.tracedFunc(args.n);
      const generatedDiagram = generateDiagram(trace);

      console.log({ trace, generatedDiagram });

      return {
        ...oldState,
        steps: trace,
        generatedDiagram,
      };
    })
    .otherwise(() => oldState);

  return newState;
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
