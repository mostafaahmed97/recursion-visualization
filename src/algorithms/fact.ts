import { Step } from '@/utils';

function factorialWithLogging(n: number, trace: Step[]): number {
  trace.push({ type: 'call', fnName: 'factorial', params: n.toString() });

  if (n == 1) {
    trace.push({ type: 'log', msg: `is base case` });
    trace.push({ type: 'return', val: `1` });
    return 1;
  }

  trace.push({ type: 'log', msg: `val = factorial(${n - 1})` });
  const val = factorialWithLogging(n - 1, trace);

  trace.push({ type: 'return', val: `${n * val}` });
  return n * val;
}

export function tracedFactorial(num: number): Step[] {
  const trace: Step[] = [];
  factorialWithLogging(num, trace);
  return trace;
}

export function factorial(n: number): number {
  if (n == 1) {
    return 1;
  }

  const val = factorial(n - 1);

  return n * val;
}
