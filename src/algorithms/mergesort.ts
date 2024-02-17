import { Step } from '@/utils';

export function mergeSort(input: number[]) {
  if (input.length <= 1) {
    return input;
  }

  const midIdx = Math.ceil(input.length / 2);

  const listA = input.slice(0, midIdx);
  const listB = input.slice(midIdx, input.length);

  const sortedListA = mergeSort(listA);
  const sortedListB = mergeSort(listB);

  const mergedLists = mergeSortedLists(sortedListA, sortedListB);
  return mergedLists;
}

export function mergeSortedLists(listA: number[], listB: number[]) {
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
  trace.push({ type: 'call', fnName: 'mergeSort', params: input.toString() });

  if (input.length <= 1) {
    trace.push({ type: 'log', msg: 'nothing to sort' });
    trace.push({ type: 'return', val: input.toString() });

    return input;
  }

  const midIdx = Math.ceil(input.length / 2);
  trace.push({ type: 'log', msg: `splitting at index ${midIdx}` });

  const listA = input.slice(0, Math.ceil(input.length / 2));
  const listAString = arrtostr(listA);
  trace.push({ type: 'log', msg: `List A = ${listAString}` });

  const listB = input.slice(listA.length, input.length);
  const listBString = arrtostr(listB);
  trace.push({ type: 'log', msg: `List B = ${listBString}` });

  const sortedListA = mergeSortWithLogging(listA, trace);
  trace.push({ type: 'log', msg: 'sorting A done' });

  const sortedListB = mergeSortWithLogging(listB, trace);
  trace.push({ type: 'log', msg: 'sorting B done' });

  const mergedLists = mergeSortedListsWithLogging(
    sortedListA,
    sortedListB,
    trace
  );

  trace.push({
    type: 'log',
    msg: `returning merge sorted list = ${arrtostr(mergedLists)}`,
  });

  trace.push({
    type: 'return',
    val: mergedLists.toString(),
  });
  return mergedLists;
}

function mergeSortedListsWithLogging(
  listA: number[],
  listB: number[],
  trace: Step[]
): number[] {
  // Needs to match callee in mergeSort

  trace.push({
    type: 'call',
    fnName: 'mergeSortedLists',
    params: `${listA.toString()} , ${listB.toString()}`,
  });

  const merged: number[] = [];

  while (listA.length && listB.length) {
    if (listA[0] <= listB[0]) merged.push(listA.shift() as number);
    else merged.push(listB.shift() as number);
  }

  while (listA.length > 0) merged.push(listA.shift() as number);
  while (listB.length > 0) merged.push(listB.shift() as number);

  trace.push({ type: 'return', val: `merged = ${arrtostr(merged)}` });
  return merged;
}

function arrtostr(numbers: number[]): string {
  return `[${numbers.join(' - ')}]`;
}

export function tracedMergeSort(input: number[]) {
  const trace: Step[] = [];
  mergeSortWithLogging(input, trace);
  return trace;
}
