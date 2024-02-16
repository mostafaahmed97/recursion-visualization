import {
  Msg,
  generateDiagram as diagramFromTrace,
  generateForExcalidraw,
} from '@/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ExcalidrawElementSkeleton } from '@excalidraw/excalidraw/types/data/transform';
import { algorithms } from '@/algorithms';
import { factorial } from '@/algorithms/fact';

export interface VisualizationPaneState {
  diagram: ExcalidrawElementSkeleton[];
  steps: Msg[];
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
      action: PayloadAction<{ selectedAlgorithm: string; args: Object }>
    ) => {
      const factorialTracing = algorithms[0].tracedFunc;

      const steps = factorialTracing(3);
      console.log({ steps });

      const diagram = generateForExcalidraw(steps);
      console.log({ diagram });
      state.diagram = diagram;
    },
  },
});

export const { generateDiagram } = visualizationPaneSlice.actions;
