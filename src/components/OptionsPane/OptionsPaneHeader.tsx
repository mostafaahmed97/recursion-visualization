import { AlgorithmPicker } from './AlgorithmPicker/AlgorithmPicker';

export function OptionsPaneHeader() {
  return (
    <div className="flex flex-row items-center w-full">
      <h1 className="font-bold text-lg">Recursion Visualizer</h1>
      <AlgorithmPicker></AlgorithmPicker>
    </div>
  );
}
