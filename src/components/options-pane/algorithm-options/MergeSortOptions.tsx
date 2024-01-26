import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '@/components/VisualizationProvider';
import { useContext, useState } from 'react';

import { Input } from '@/components/ui/input';

export function MergeSortOptions() {
  //   const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  const [input, setInput] = useState('');
  return (
    <>
      <>
        <small className="text-gray-500">Numbers list</small>
        <p>
          <small className="text-gray-500">Separate numbers by comma</small>
        </p>
        <Input
          key="mergesortinput"
          value={input}
          onChange={event => {
            console.log(input);
            setInput(event.target.value);
            vizDispatch({
              type: 'update_mergesort_options',
              numbersList: event.target.value,
            });
          }}
        ></Input>
      </>
    </>
  );
}
