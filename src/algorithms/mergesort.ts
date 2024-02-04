import { Msg } from '../utils';

export function mergeSort(input: number[]) {
  if (input.length <= 1) {
    return input;
  }

  const listA = input.slice(0, Math.ceil(input.length / 2));
  const listB = input.slice(listA.length, input.length);

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
  const actor = `mergeSort([${input.join(' | ')}])`;

  if (input.length <= 1) {
    trace.push({
      type: 'output',
      actor,
      msg: 'nothing to sort | length = 1',
    });

    trace.push({
      type: 'return',
      actor,
      value: '',
    });
    return input;
  }

  trace.push({
    type: 'output',
    actor,
    msg: `splitting at index ${Math.ceil(input.length / 2)}`,
  });

  const listA = input.slice(0, Math.ceil(input.length / 2));
  trace.push({ type: 'output', actor, msg: `List A = [${listA.join(' | ')}]` });

  const listB = input.slice(listA.length, input.length);
  trace.push({ type: 'output', actor, msg: `List B = [${listB.join(' | ')}]` });

  trace.push({
    type: 'call',
    actor: actor,
    callee: `mergeSort([${listA.join(' | ')}])`,
    arguments: 'Sorting List A',
  });

  const sortedListA = mergeSortWithLogging(listA, trace);

  trace.push({
    type: 'output',
    actor,
    msg: 'sorting A done',
  });

  trace.push({
    type: 'call',
    actor: actor,
    callee: `mergeSort([${listB.join(' - ')}])`,
    arguments: 'Sorting List B',
  });

  const sortedListB = mergeSortWithLogging(listB, trace);

  trace.push({
    type: 'output',
    actor,
    msg: 'sorting B done',
  });

  trace.push({
    type: 'call',
    actor: actor,
    callee: `sortedMerge( [ ${sortedListA.join('-')} - ${sortedListB.join(
      '-'
    )}] )`,
    arguments: 'merging sorted lists, A = [] B = []',
  });

  const mergedLists = mergeSortedListsWithLogging(
    sortedListA,
    sortedListB,
    trace
  );

  trace.push({
    type: 'output',
    actor,
    msg: `returning merge sorted list = [${mergedLists.join(' | ')}]`,
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
  const actor = `sortedMerge( [ ${listA.join('-')} - ${listB.join('-')}] )`;
  trace.push({ type: 'output', actor, msg: 'merging A & B' });
  const merged: number[] = [];

  while (listA.length && listB.length) {
    if (listA[0] <= listB[0]) merged.push(listA.shift() as number);
    else merged.push(listB.shift() as number);
  }

  while (listA.length > 0) merged.push(listA.shift() as number);
  while (listB.length > 0) merged.push(listB.shift() as number);

  trace.push({ type: 'return', actor, value: `Merged ${merged}` });
  return merged;
}

export function tracedMergeSort(input: number[]) {
  const trace: Msg[] = [];
  mergeSortWithLogging(input, trace);
  return trace;
}
