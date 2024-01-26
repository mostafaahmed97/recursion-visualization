import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '../VisualizationProvider';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useContext } from 'react';

export function SelectedAlgorithmDisplay() {
  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  return (
    <div className="flex-grow overflow-auto w-full">
      Factorial
      <div>
        <h3>Options</h3>
        <div>Actual Options that vary / algo</div>
      </div>
      <div>
        <h3>Code</h3>
        <div className="w-full max-w-full">
          <SyntaxHighlighter language="typescript">
            {vizCxt.displayCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
