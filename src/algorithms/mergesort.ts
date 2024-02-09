import { Msg } from '../utils';

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

function mergeSortWithLogging(input: number[], trace: Msg[]): number[] {
  const actor = `mergeSort(${arrtostr(input)})`;

  if (input.length <= 1) {
    trace.push({ type: 'output', actor, msg: 'nothing to sort' });
    trace.push({ type: 'return', actor, value: '' });

    return input;
  }

  const midIdx = Math.ceil(input.length / 2);
  trace.push({ type: 'output', actor, msg: `splitting at index ${midIdx}` });

  const listA = input.slice(0, Math.ceil(input.length / 2));
  const listAString = arrtostr(listA);
  trace.push({ type: 'output', actor, msg: `List A = ${listAString}` });

  const listB = input.slice(listA.length, input.length);
  const listBString = arrtostr(listB);
  trace.push({ type: 'output', actor, msg: `List B = ${listBString}` });

  trace.push({
    type: 'call',
    actor: actor,
    callee: `mergeSort(${listAString})`,
    arguments: 'Sorting List A',
  });

  const sortedListA = mergeSortWithLogging(listA, trace);
  trace.push({ type: 'output', actor, msg: 'sorting A done' });

  trace.push({
    type: 'call',
    actor: actor,
    callee: `mergeSort(${listBString})`,
    arguments: 'Sorting List B',
  });

  const sortedListB = mergeSortWithLogging(listB, trace);

  trace.push({ type: 'output', actor, msg: 'sorting B done' });

  const sortedListAString = arrtostr(sortedListA);
  const sortedListBString = arrtostr(sortedListB);

  trace.push({
    type: 'call',
    actor: actor,
    callee: `mergeSortedLists(${sortedListAString} | ${sortedListBString})`,
    arguments: `merging sorted lists | A = ${sortedListAString} B = ${sortedListBString}`,
  });

  const mergedLists = mergeSortedListsWithLogging(
    sortedListA,
    sortedListB,
    trace
  );

  trace.push({
    type: 'output',
    actor,
    msg: `returning merge sorted list = ${arrtostr(mergedLists)}`,
  });

  trace.push({
    type: 'return',
    actor,
    value: '',
  });
  return mergedLists;
}

function mergeSortedListsWithLogging(
  listA: number[],
  listB: number[],
  trace: Msg[]
): number[] {
  // Needs to match callee in mergeSort
  const listAString = arrtostr(listA);
  const listBString = arrtostr(listB);
  const actor = `mergeSortedLists(${listAString} | ${listBString})`;
  trace.push({ type: 'output', actor, msg: 'merging A & B' });

  const merged: number[] = [];

  while (listA.length && listB.length) {
    if (listA[0] <= listB[0]) merged.push(listA.shift() as number);
    else merged.push(listB.shift() as number);
  }

  while (listA.length > 0) merged.push(listA.shift() as number);
  while (listB.length > 0) merged.push(listB.shift() as number);

  trace.push({ type: 'return', actor, value: `merged = ${arrtostr(merged)}` });
  return merged;
}

function arrtostr(numbers: number[]): string {
  return `[${numbers.join(' - ')}]`;
}

export function tracedMergeSort(input: number[]) {
  const trace: Msg[] = [];
  mergeSortWithLogging(input, trace);
  return trace;
}
