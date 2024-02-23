import { factorial, tracedFactorial } from './factorial';
import { fibonacci, tracedFibonacci } from './fibonacci';
import { merge, mergeSort, tracedMergeSort } from './mergesort';

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

  ${merge.toString()}
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
