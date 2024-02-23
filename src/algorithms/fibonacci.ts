import { Step } from '@/utils';

export function fibonacci(n: number): number {
  if (n < 2) {
    // base case
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

export function fibonacciWithLogging(n: number, trace: Step[]): number {
  trace.push({ type: 'call', fnName: 'fibonacci', params: n.toString() });

  if (n < 2) {
    trace.push({ type: 'log', msg: `base case` });
    trace.push({ type: 'log', msg: `return ${n}` });

    trace.push({ type: 'return', val: n.toString() });
    return n;
  }

  const fibMinusOne = fibonacciWithLogging(n - 1, trace);
  const fibMinusTwo = fibonacciWithLogging(n - 2, trace);

  trace.push({ type: 'log', msg: `return ${fibMinusOne} + ${fibMinusTwo}` });
  trace.push({ type: 'return', val: `${fibMinusOne + fibMinusTwo}` });

  return fibMinusTwo + fibMinusOne;
}

export function tracedFibonacci(n: number): Step[] {
  const trace: Step[] = [];
  fibonacciWithLogging(n, trace);
  return trace;
}
