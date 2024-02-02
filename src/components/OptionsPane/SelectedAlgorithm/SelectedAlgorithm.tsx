import { FactorialOptions, MergeSortOptions } from './AlgorithmOptions';

import { CodeDisplay } from '.';
import { Separator } from '@/components/ui/separator';
import { match } from 'ts-pattern';
import { selectedAlgorithm } from '../optionsPaneSlice';
import { useSelector } from 'react-redux';

export function SelectedAlgorithmDisplay() {
  const currentAlgorithm = useSelector(selectedAlgorithm);
  return (
    <div
      key="selected-algorithm-display"
      className="flex-grow overflow-auto w-full p-2"
    >
      <h2 className="text-lg font-bold">{currentAlgorithm}</h2>

      <Separator className="my-1"></Separator>

      <div>
        <h3 className="text-base font-bold mb-1">Parameters</h3>
        <div className="p-1">
          {match(currentAlgorithm)
            .with('Factorial', () => <FactorialOptions></FactorialOptions>)
            .with('Merge Sort', () => <MergeSortOptions></MergeSortOptions>)
            .otherwise(() => (
              <p>Select an algorithm</p>
            ))}
        </div>
      </div>

      <CodeDisplay></CodeDisplay>
    </div>
  );
}
