import { Msg, generateDiagram } from '../utils';

const trace: Msg[] = [];

function mergeSort(input: number[]): number[] {
  const actor = `mergeSort( [${input.join('-')}] )`;

  if (input.length <= 1) {
    trace.push({ type: 'return', actor, value: 'Nothing to sort' });
    return input;
  }

  trace.push({ type: 'output', actor, msg: 'splitting' });

  const listA = input.slice(0, Math.ceil(input.length / 2));
  trace.push({ type: 'output', actor, msg: `List A = [${listA.join('-')}]` });

  const listB = input.slice(listA.length, input.length);
  trace.push({ type: 'output', actor, msg: `List B = [${listB.join('-')}]` });

  trace.push({
    type: 'call',
    actor: actor,
    callee: `mergeSort( [${listA.join('-')}] )`,
    arguments: 'Sorting List A',
  });
  const sortedListA = mergeSort(listA);

  trace.push({
    type: 'call',
    actor: actor,
    callee: `mergeSort( [${listB.join('-')}] )`,
    arguments: 'Sorting List B',
  });
  const sortedListB = mergeSort(listB);

  trace.push({
    type: 'call',
    actor: actor,
    callee: `sortedMerge( [ ${sortedListA.join('-')} - ${sortedListB.join(
      '-'
    )}] )`,
    arguments: 'Sorting List B',
  });
  const mergedLists = sortedMerge(sortedListA, sortedListB);

  trace.push({ type: 'return', actor, value: 'returning from subgraph' });
  return mergedLists;
}

function sortedMerge(listA: number[], listB: number[]): number[] {
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

console.log(mergeSort([1, 5, 3]));
console.log(generateDiagram(trace));
