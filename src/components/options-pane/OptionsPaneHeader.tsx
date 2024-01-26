import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '../VisualizationProvider';

import { AlgorithmSelection } from './AlgorithmSelection';
import { useContext } from 'react';

export function OptionsPaneHeader() {
  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  return (
    <div className="flex flex-row items-center w-full">
      <h1 className="font-bold text-lg">Recursion Visualizer</h1>
      <AlgorithmSelection></AlgorithmSelection>
    </div>
  );
}
