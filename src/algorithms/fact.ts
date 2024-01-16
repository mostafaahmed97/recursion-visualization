type Call = {
  type: 'call';
  actor: string;
  callee: string;
  arguments: string;
};

type Return = {
  type: 'return';
  actor: string;
  value: string;
};

type Output = {
  type: 'output';
  actor: string;
  msg: string;
};

type Msg = Call | Output | Return;

function factorialWithLogging(n: number, trace: Msg[]): number {
  const actor = `fact(${n})`;

  if (n == 1) {
    // Output --> is base case
    trace.push({
      type: 'output',
      actor: actor,
      msg: 'Is base case',
    });

    // Return
    trace.push({
      type: 'return',
      actor: actor,
      value: '1',
    });
    return 1;
  }

  // Output
  trace.push({
    type: 'output',
    actor: actor,
    msg: 'Not base case',
  });

  // Output
  trace.push({
    type: 'output',
    actor: actor,
    msg: `Calling fact(${n} - 1)`,
  });

  //   Call
  trace.push({
    type: 'call',
    actor: actor,
    callee: `fact(${n - 1})`,
    arguments: `${n} - 1`,
  });
  const val = factorialWithLogging(n - 1, trace);

  // Return
  trace.push({
    type: 'return',
    actor: actor,
    value: `${n * val}`,
  });
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
