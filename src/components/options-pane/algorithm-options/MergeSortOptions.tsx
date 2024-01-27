import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '@/components/VisualizationProvider';

import { Input } from '@/components/ui/input';
import { useContext } from 'react';

export function MergeSortOptions() {
  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  return (
    <>
      <small className="text-gray-500">Numbers list</small>

      <p>
        <small className="text-gray-500">Separate numbers by comma</small>
      </p>

      <Input
        key="mergesortinput"
        value={vizCxt.mergeSortOptions.rawInput}
        autoFocus={true}
        onChange={event =>
          vizDispatch({
            type: 'update_mergesort_options',
            rawListInput: event.target.value,
          })
        }
      ></Input>
    </>
  );
}
