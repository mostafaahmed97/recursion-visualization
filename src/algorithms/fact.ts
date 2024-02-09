import { Msg } from '@/utils';

function factorialWithLogging(n: number, trace: Msg[]): number {
  const actor = `factorial(${n})`;

  if (n == 1) {
    trace.push({ type: 'output', actor: actor, msg: '1 == 1' });

    trace.push({ type: 'return', actor: actor, value: '1' });
    return 1;
  }

  trace.push({ type: 'output', actor: actor, msg: `${n} != 1` });

  trace.push({
    type: 'output',
    actor: actor,
    msg: `val = ${n} * factorial(${n} - 1)`,
  });

  trace.push({
    type: 'call',
    actor: actor,
    callee: `factorial(${n - 1})`,
    arguments: `factorial(${n} - 1)`,
  });
  const val = factorialWithLogging(n - 1, trace);

  trace.push({
    type: 'output',
    actor: actor,
    msg: `${n} * ${val} = ${n * val}`,
  });

  trace.push({ type: 'return', actor: actor, value: `${n * val}` });
  return n * val;
}

export function tracedFactorial(num: number): Msg[] {
  const trace: Msg[] = [];
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
