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
    <div className="flex flex-row items-center">
      <h1>Title</h1>
      <AlgorithmSelection></AlgorithmSelection>
    </div>
  );
}
