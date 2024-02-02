import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '@/components/VisualizationProvider';

import { Input } from '@/components/ui/input';
import { useContext } from 'react';

export function FactorialOptions() {
  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  return (
    <>
      <small className="text-gray-500">n</small>
      <Input
        value={vizCxt.factorialOptions.n}
        onChange={event =>
          vizDispatch({
            type: 'update_factorial_options',
            n: parseInt(event.target.value),
          })
        }
      ></Input>
    </>
  );
}
