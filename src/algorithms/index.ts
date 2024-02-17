import { dfs, tracedDfs } from './dfs';
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
  {
    name: 'Depth First Search',
    displayCode: dfs.toString(),
    tracedFunc: tracedDfs,
  },
] as const;

export const availableAlgorithms = [
  'Factorial',
  'Merge Sort',
  'Depth First Search',
] as const;
