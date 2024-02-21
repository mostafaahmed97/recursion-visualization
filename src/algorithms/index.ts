import { factorial, tracedFactorial } from './fact';
import { fibonacci, tracedFibonacci } from './fibonacii';
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
    name: 'Fibonacci',
    displayCode: fibonacci.toString(),
    tracedFunc: tracedFibonacci,
  },
] as const;

export const availableAlgorithms = [
  'Factorial',
  'Merge Sort',
  'Fibonacci',
] as const;
