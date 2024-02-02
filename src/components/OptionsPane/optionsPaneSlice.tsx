import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { algorithms, availableAlgorithms } from '@/algorithms';

import { RootState } from '@/store';

type AvailableAlgorithms = typeof availableAlgorithms;
type Algorithms = (typeof availableAlgorithms)[number];

export interface OptionsPaneState {
  algorithmOptions: AvailableAlgorithms;
  selectedAlgorithm: Algorithms;
  displayCode: string;
}

const initialState: OptionsPaneState = {
  algorithmOptions: availableAlgorithms,
  selectedAlgorithm: algorithms[0].name,
  displayCode: algorithms[0].displayCode,
};

export const optionsPaneSlice = createSlice({
  name: 'Options Pane',
  initialState,
  reducers: {
    updateSelection: (state, action: PayloadAction<string>) => {
      const newSelection = action.payload as Algorithms;
      state.selectedAlgorithm = newSelection;
      state.displayCode =
        algorithms.find(a => a.name == newSelection)?.displayCode || '';
      return state;
    },
  },
  selectors: {
    availableAlgorithms: state => state.algorithmOptions,
  },
});

export const { updateSelection } = optionsPaneSlice.actions;

export const availableAlgs = (state: RootState) =>
  state.optionsPane.algorithmOptions;
export const displayCode = (state: RootState) => state.optionsPane.displayCode;
export const selectedAlgorithm = (state: RootState) =>
  state.optionsPane.selectedAlgorithm;
