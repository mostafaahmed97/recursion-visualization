import { Step } from '../utils';

type GraphNode = {
  id: number;
  data: number;
  left?: GraphNode;
  right?: GraphNode;
};

const nodeA: GraphNode = { id: 1, data: 1 };
const nodeB: GraphNode = { id: 2, data: 2 };
const nodeC: GraphNode = { id: 3, data: 3 };
const nodeD: GraphNode = { id: 4, data: 4 };
const nodeE: GraphNode = { id: 5, data: 5 };

nodeA.left = nodeB;
nodeA.right = nodeC;

nodeB.left = nodeD;
nodeB.right = nodeE;

nodeC.left = nodeE;

export function dfs(node: GraphNode, done: number[], visited: number[]) {
  if (visited.includes(node.id)) return;

  visited.push(node.id);

  if (node.left) {
    dfs(node.left, done, visited);
  }

  if (node.right) {
    dfs(node.right, done, visited);
  }

  done.push(node.id);
  return done;
}

console.log(dfs(nodeA, [], []));

function dfsWithLogging(
  node: GraphNode,
  done: number[],
  visited: number[],
  trace: Step[]
) {
  trace.push({
    type: 'call',
    fnName: 'dfs',
    params: `node, [${done}], [${visited}]`,
  });

  if (visited.includes(node.id)) {
    trace.push({ type: 'log', msg: 'node visited before' });
    trace.push({ type: 'return', val: '' });
    return;
  }

  trace.push({ type: 'log', msg: 'marking node as visited' });
  visited.push(node.id);

  if (node.left) {
    trace.push({ type: 'log', msg: 'visiting left subtree' });
    dfsWithLogging(node.left, done, visited, trace);
  }

  if (node.right) {
    trace.push({ type: 'log', msg: 'visiting right subtree' });
    dfsWithLogging(node.right, done, visited, trace);
  }

  trace.push({ type: 'log', msg: 'marking as done' });
  done.push(node.id);

  trace.push({ type: 'return', val: `done nodes = ${done.toString()}` });
  return done;
}

export function tracedDfs() {
  const trace: Step[] = [];

  // Testing with dummy graph , WIP
  dfsWithLogging(nodeA, [], [], trace);
  return trace;
}
