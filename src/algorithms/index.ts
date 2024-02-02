import { factorial, tracedFactorial } from './fact';
import { mergeSort, mergeSortedLists, tracedMergeSort } from './mergesort';

export const algorithms = [
  {
    name: 'Factorial',
    displayCode: factorial.toString(),
    tracedFunc: tracedFactorial,
  },
  {
    name: 'Merge Sort',
    displayCode: `
  ${mergeSort.toString()}
      
  ${mergeSortedLists.toString()}
    `,
    tracedFunc: tracedMergeSort,
  },
] as const;

export const availableAlgorithms = ['Factorial', 'Merge Sort'] as const;
