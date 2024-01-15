import { Msg, generateDiagram } from './common';

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
console.log({ nodeA });

const trace: Msg[] = [];

const done: GraphNode['id'][] = [];
const visited: GraphNode[] = [];

function dfs(graph: GraphNode) {
  const actor = `dfs-at-node-${graph.id}`;

  trace.push({ type: 'output', actor, msg: 'Marking node as visited' });
  visited.push(graph);

  if (graph.left) {
    console.log('going to left');

    trace.push({ type: 'output', actor, msg: 'Going to left child' });
    trace.push({
      type: 'call',
      actor: actor,
      callee: `dfs-at-node-${graph.left.id}`,
      arguments: 'left subgraph',
    });
    dfs(graph.left);
  }

  if (graph.right) {
    trace.push({ type: 'output', actor, msg: 'Going to right child' });
    trace.push({
      type: 'call',
      actor: actor,
      callee: `dfs-at-node-${graph.right.id}`,
      arguments: 'right subgraph',
    });
    dfs(graph.right);
  }

  trace.push({ type: 'output', actor, msg: 'Marking node as done' });
  done.push(graph.id);

  trace.push({ type: 'return', actor, value: 'returning from subgraph' });
}

dfs(nodeA);

console.log(generateDiagram(trace));
console.log({ done });
