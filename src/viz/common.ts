import { match } from 'ts-pattern';

export type Call = {
  type: 'call';
  actor: string;
  callee: string;
  arguments: string;
};

export type Return = {
  type: 'return';
  actor: string;
  value: string;
};

export type Output = {
  type: 'output';
  actor: string;
  msg: string;
};

export type Msg = Call | Output | Return;

export function generateDiagram(trace: Msg[]): string {
  let diagram = 'sequenceDiagram \n';
  let actors: string[] = [];
  let callstack: string[] = [];

  for (let evt of trace) {
    const { actor } = evt;

    if (!actors.includes(actor)) {
      diagram += `create participant ${actor} \n`;
      actors.push(actor);
      console.log({ actors });
    }

    match(evt)
      .with({ type: 'call' }, e => {
        if (!actors.includes(e.callee)) {
          diagram += `create participant ${e.callee} \n`;
          actors.push(e.callee);
        }

        diagram += `${actor} ->> ${e.callee}: ${e.arguments} \n`;
        callstack.push(actor);
      })
      .with({ type: 'return' }, e => {
        if (!callstack.length) return;

        diagram += `destroy ${actor} \n`;
        diagram += `${actor} ->> ${callstack.pop()}: ${e.value} \n`;
      })
      .with({ type: 'output' }, e => {
        diagram += `note over ${actor}: ${e.msg} \n`;
      })
      .exhaustive();
  }

  return diagram;
}
