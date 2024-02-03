import { Msg, generateDiagram as diagramFromTrace } from '@/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { algorithms } from '@/algorithms';

export interface VisualizationPaneState {
  diagram: string;
  steps: Msg[];
  currStepIdx: number;
}

const initialState: VisualizationPaneState = {
  diagram: 'sequenceDiagram',
  steps: [],
  currStepIdx: 0,
};

export const visualizationPaneSlice = createSlice({
  name: 'Visualization Pane Slice',
  initialState,
  reducers: {
    generateDiagram: (
      state,
      action: PayloadAction<{ selectedAlgorithm: string; args: Object }>
    ) => {
      console.log('Tracing', { action });
      const selection = action.payload.selectedAlgorithm;
      const algorithm = algorithms.find(a => a.name == selection);

      if (!algorithm) return state;
      const args = action.payload.args;

      const trace = algorithm.tracedFunc(...Object.values(args));
      const diagram = diagramFromTrace(trace);

      state.steps = trace;
      state.diagram = diagram;
    },
  },
});

export const { generateDiagram } = visualizationPaneSlice.actions;
