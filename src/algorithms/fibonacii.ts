import { Step } from '@/utils';

export function fibonacci(n: number): number {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

export function fibonacciWithLogging(n: number, trace: Step[]): number {
  trace.push({ type: 'call', fnName: 'fibonacci', params: n.toString() });

  if (n < 2) {
    trace.push({ type: 'log', msg: `is base case` });
    trace.push({ type: 'return', val: n.toString() });

    return n;
  }

  trace.push({ type: 'log', msg: `computing fibonacci(${n} - 1)` });
  const fibMinusOne = fibonacciWithLogging(n - 1, trace);

  trace.push({ type: 'log', msg: `computing fibonacci(${n} - 2)` });
  const fibMinusTwo = fibonacciWithLogging(n - 2, trace);

  trace.push({ type: 'return', val: `${fibMinusOne + fibMinusTwo}` });
  return fibMinusTwo + fibMinusOne;
}

export function tracedFibonacci(n: number): Step[] {
  const trace: Step[] = [];
  fibonacciWithLogging(n, trace);
  return trace;
}
