import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Step, generateForExcalidraw } from '@/utils';

import { ExcalidrawElementSkeleton } from '@excalidraw/excalidraw/types/data/transform';
import { algorithms } from '@/algorithms';

export interface VisualizationPaneState {
  diagram: ExcalidrawElementSkeleton[];
  steps: Step[];
  currStepIdx: number;
}

const initialState: VisualizationPaneState = {
  diagram: [],
  steps: [],
  currStepIdx: 0,
};

export const visualizationPaneSlice = createSlice({
  name: 'Visualization Pane Slice',
  initialState,
  reducers: {
    generateDiagram: (
      state,
      action: PayloadAction<{ selectedAlgorithm: string; args: object }>
    ) => {
      const selection = action.payload.selectedAlgorithm;
      const algorithm = algorithms.find(a => a.name == selection);

      if (!algorithm) return state;
      const args = action.payload.args;

      const trace = algorithm.tracedFunc(...Object.values(args));
      const diagram = generateForExcalidraw(trace);

      state.steps = trace;
      state.diagram = diagram;
    },
  },
});

export const { generateDiagram } = visualizationPaneSlice.actions;
