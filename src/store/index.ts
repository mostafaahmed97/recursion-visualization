import { configureStore } from '@reduxjs/toolkit';
import { factorialSlice } from '@/components/OptionsPane/SelectedAlgorithm/AlgorithmOptions/FactorialOptions/factorialSlice';
import { fibonacciSlice } from '@/components/OptionsPane/SelectedAlgorithm/AlgorithmOptions/FibonacciOptions/fibonacciOptionsSlice';
import { mergeSortSlice } from '@/components/OptionsPane/SelectedAlgorithm/AlgorithmOptions/MergeSortOptions/mergeSortSlice';
import { optionsPaneSlice } from '@/components/OptionsPane/optionsPaneSlice';
import { visualizationPaneSlice } from '@/components/VisualizationPane/visualizationPaneSlice';

export const store = configureStore({
  reducer: {
    visualizationPane: visualizationPaneSlice.reducer,
    optionsPane: optionsPaneSlice.reducer,
    factorial: factorialSlice.reducer,
    mergeSort: mergeSortSlice.reducer,
    fibonacci: fibonacciSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
