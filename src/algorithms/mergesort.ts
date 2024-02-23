import { Step } from '@/utils';

export function mergeSort(input: number[]) {
  if (input.length <= 1) {
    // base case
    return input;
  }

  const midIdx = Math.ceil(input.length / 2);

  const listA = input.slice(0, midIdx);
  const listB = input.slice(midIdx, input.length);

  const sortedListA = mergeSort(listA);
  const sortedListB = mergeSort(listB);

  const mergedLists = merge(sortedListA, sortedListB);
  return mergedLists;
}

export function merge(listA: number[], listB: number[]) {
  const merged: number[] = [];

  while (listA.length && listB.length) {
    if (listA[0] <= listB[0]) merged.push(listA.shift() as number);
    else merged.push(listB.shift() as number);
  }

  while (listA.length > 0) merged.push(listA.shift() as number);
  while (listB.length > 0) merged.push(listB.shift() as number);

  return merged;
}

function mergeSortWithLogging(input: number[], trace: Step[]): number[] {
  trace.push({ type: 'call', fnName: 'mergeSort', params: arrtostr(input) });

  if (input.length <= 1) {
    trace.push({ type: 'log', msg: 'base case' });
    trace.push({ type: 'return', val: arrtostr(input) });
    return input;
  }

  const midIdx = Math.ceil(input.length / 2);
  trace.push({ type: 'log', msg: `midIdx =  ${midIdx}` });

  const listA = input.slice(0, Math.ceil(input.length / 2));
  trace.push({ type: 'log', msg: `List A = ${arrtostr(listA)}` });

  const listB = input.slice(listA.length, input.length);
  trace.push({ type: 'log', msg: `List B = ${arrtostr(listB)}` });

  const sortedListA = mergeSortWithLogging(listA, trace);
  const sortedListB = mergeSortWithLogging(listB, trace);

  const mergedLists = mergeWithLogging(sortedListA, sortedListB, trace);

  trace.push({ type: 'log', msg: `return ${arrtostr(mergedLists)}` });
  trace.push({ type: 'return', val: arrtostr(mergedLists) });
  return mergedLists;
}

function mergeWithLogging(
  listA: number[],
  listB: number[],
  trace: Step[]
): number[] {
  trace.push({
    type: 'call',
    fnName: 'merge',
    params: `${arrtostr(listA)} , ${arrtostr(listB)}`,
  });

  const merged: number[] = [];

  while (listA.length && listB.length) {
    if (listA[0] <= listB[0]) merged.push(listA.shift() as number);
    else merged.push(listB.shift() as number);
  }

  while (listA.length > 0) merged.push(listA.shift() as number);
  while (listB.length > 0) merged.push(listB.shift() as number);

  trace.push({ type: 'return', val: arrtostr(merged) });
  return merged;
}

function arrtostr(numbers: number[]): string {
  return `[${numbers.join(', ')}]`;
}

export function tracedMergeSort(input: number[]) {
  const trace: Step[] = [];
  mergeSortWithLogging(input, trace);
  return trace;
}
