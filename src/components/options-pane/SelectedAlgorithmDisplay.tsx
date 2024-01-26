import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '../VisualizationProvider';

import { FactorialOptions } from './algorithm-options/FactorialOptions';
import { Separator } from '../ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { match } from 'ts-pattern';
import { useContext } from 'react';

export function SelectedAlgorithmDisplay() {
  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  const { selectedAlgorithm } = vizCxt;

  return (
    <div className="flex-grow overflow-auto w-full p-2">
      <h2 className="text-lg font-bold">{selectedAlgorithm}</h2>

      <Separator className="my-1"></Separator>

      <div>
        <h3 className="text-base font-bold mb-2">Parameters</h3>
        <div className="p-1">
          {match(selectedAlgorithm)
            .with('Factorial', () => {
              return <FactorialOptions></FactorialOptions>;
            })
            .otherwise(() => (
              <p>Select an algorithm</p>
            ))}
        </div>
      </div>

      <div>
        <h3 className="text-base font-bold my-2">Code</h3>
        <div className="">
          <SyntaxHighlighter
            showInlineLineNumbers={true}
            wrapLines={true}
            language="typescript"
          >
            {vizCxt.displayCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
