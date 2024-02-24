import { Step } from '@/utils';

function factorialWithLogging(n: number, trace: Step[]): number {
  trace.push({ type: 'call', fnName: 'factorial', params: n.toString() });

  if (n == 1) {
    trace.push({ type: 'log', msg: `base case` });
    trace.push({ type: 'log', msg: `return 1` });

    trace.push({ type: 'return', val: `1` });
    return 1;
  }

  const val = factorialWithLogging(n - 1, trace);

  trace.push({ type: 'log', msg: `return ${n} * ${val}` });
  trace.push({ type: 'return', val: `${n * val}` });
  return n * val;
}

export function tracedFactorial(num: number): Step[] {
  const trace: Step[] = [];
  factorialWithLogging(num, trace);
  return trace;
}

export const factorial = `function factorial(n) {
  if (n == 1) {
    // base case
    return 1;
  }

  return n * factorial(n - 1);
}
`;
