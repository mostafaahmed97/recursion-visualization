import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/ui/button';
import { RootState } from '@/store';
import { generateDiagram } from '@/components/VisualizationPane/visualizationPaneSlice';
import { match } from 'ts-pattern';

export function TracingTrigger() {
  const dispatch = useDispatch();

  const selectedAlgorithm = useSelector(
    (state: RootState) => state.optionsPane.selectedAlgorithm
  );

  const factorialArgs = useSelector((state: RootState) => state.factorial.args);
  const mergeSortArgs = useSelector((state: RootState) => state.mergeSort.args);

  function onTriggerHandler() {
    let args;

    match(selectedAlgorithm)
      .with('Merge Sort', () => (args = mergeSortArgs))
      .with('Factorial', () => (args = factorialArgs))
      .with('Depth First Search', () => (args = {}))
      .otherwise(() => (args = null));

    if (!args) return;

    dispatch(
      generateDiagram({
        args,
        selectedAlgorithm,
      })
    );
  }

  return (
    <div className="w-full">
      <Button className="w-full" onClick={() => onTriggerHandler()}>
        Trace
      </Button>
    </div>
  );
}
