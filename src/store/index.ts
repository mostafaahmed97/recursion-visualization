import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';

import { availableAlgorithms } from '@/algorithms';

export interface AlgorithmSelectionState {
  availableAlgorithms: string[];
  selectedAlgorithm: string;
}

const initialState: AlgorithmSelectionState = {
  selectedAlgorithm: 'Factorial',
  availableAlgorithms,
};

const algorithmSelectionSlice = createSlice({
  name: 'Algorithm Selection',
  initialState,
  reducers: {
    updateSelection: (
      state,
      action: PayloadAction<{ selectedAlg: string }>
    ) => {
      state.selectedAlgorithm = action.payload.selectedAlg;
      return state;
    },
  },
});

// Auto generated typed actions for reducers given to slice
export const { updateSelection } = algorithmSelectionSlice.actions;

export const selectedAlgorithm = (state: RootState) =>
  state.algorithmSelection.selectedAlgorithm;

export const store = configureStore({
  reducer: {
    algorithmSelection: algorithmSelectionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
