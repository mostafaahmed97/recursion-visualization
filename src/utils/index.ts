import {
  ExcalidrawElementSkeleton,
  ValidContainer,
} from '@excalidraw/excalidraw/types/data/transform';

import { match } from 'ts-pattern';

export type FunctionCall = {
  type: 'call';
  fnName: string;
  params: string;
};

export type Log = {
  type: 'log';
  msg: string;
};

export type FunctionReturn = {
  type: 'return';
  val: string;
};

export type Step = FunctionCall | Log | FunctionReturn;

type ActorInfo = { name: string; x: number; y: number; drawnAtStep: number };

export function generateForExcalidraw(
  trace: Step[]
): ExcalidrawElementSkeleton[] {
  const actorWidth = 250;
  const actorHeight = 100;

  const verticalOffset = actorHeight + actorHeight * 0.5;
  const horizontalOffset = actorWidth + actorWidth * 1.25;

  let drawnStepsCtr = 0;
  let depthInStack = 0;

  const callStackPositions: ActorInfo[] = [];
  const elements: ExcalidrawElementSkeleton[] = [];

  const boxTemplate: Pick<
    ValidContainer,
    'type' | 'width' | 'height' | 'backgroundColor' | 'roundness' | 'fillStyle'
  > = {
    type: 'rectangle',
    width: actorWidth,
    height: actorHeight,
    backgroundColor: '#fff',
    roundness: { value: 1, type: 2 },
    fillStyle: 'solid',
  };

  for (const step of trace) {
    match(step)
      .with({ type: 'call' }, matched => {
        const actorName = `${matched.fnName}(${matched.params})`;

        if (depthInStack > 0) {
          const x = depthInStack * horizontalOffset;
          const y = drawnStepsCtr * verticalOffset;

          elements.push({
            type: 'arrow',
            x: x + actorWidth / 2,
            y: y + actorHeight / 2,
            height: 1,
            width: horizontalOffset - actorWidth / 2,
            startArrowhead: null,
            endArrowhead: 'triangle',
          });
        }

        depthInStack += 1;

        const x = depthInStack * horizontalOffset;
        const y = drawnStepsCtr * verticalOffset;

        elements.push({
          ...boxTemplate,
          x,
          y,
          label: { text: actorName, fontSize: 24 },
        });

        callStackPositions.push({
          name: actorName,
          drawnAtStep: drawnStepsCtr,
          x,
          y,
        });
      })
      .with({ type: 'log' }, matched => {
        const x = depthInStack * horizontalOffset;
        const y = drawnStepsCtr * verticalOffset;

        elements.push({
          ...boxTemplate,
          x,
          y,
          label: { text: matched.msg },
        });
      })
      .with({ type: 'return' }, matched => {
        const x = depthInStack * horizontalOffset;
        const y = drawnStepsCtr * verticalOffset;
        const invocationStart = callStackPositions.pop();

        // Draw vertical line for start & end pairs of actors
        if (invocationStart)
          elements.push({
            type: 'line',
            x: invocationStart.x + actorWidth / 2,
            y: invocationStart.y + actorHeight,
            width: 1,
            strokeStyle: 'dashed',
            strokeWidth: 1,
            opacity: 33,
            height:
              (drawnStepsCtr - invocationStart.drawnAtStep) * verticalOffset,
          });

        // Draw invocation end box
        elements.push({
          ...boxTemplate,
          x,
          y,
          label: { text: invocationStart?.name || '' },
        });

        // Draw return arrow only if we're at least 1 call deep
        if (depthInStack > 1)
          elements.push({
            type: 'arrow',
            x: x,
            y: y + actorHeight / 2,
            height: 1,
            width: -(horizontalOffset - actorWidth / 2),
            startArrowhead: null,
            endArrowhead: 'triangle',
            label: { text: matched.val },
          });

        depthInStack -= 1;
      })
      .exhaustive();

    drawnStepsCtr += 1;
  }

  return elements;
}
