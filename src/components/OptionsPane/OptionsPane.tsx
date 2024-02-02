import { OptionsPaneHeader } from './Header/OptionsPaneHeader';
import { SelectedAlgorithmDisplay } from './SelectedAlgorithm/SelectedAlgorithm';
import { Separator } from '../ui/separator';
import { TracingTrigger } from './TracingTrigger/TraceTrigger';
import styled from 'styled-components';

export default function OptionsPanel() {
  const OptionsPane = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33%;
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    max-width: 33%;
  `;

  return (
    <OptionsPane className="flex-col max-w-3xl">
      <OptionsPaneHeader></OptionsPaneHeader>

      <Separator className="my-2" />

      <SelectedAlgorithmDisplay></SelectedAlgorithmDisplay>

      <Separator className="my-2" />

      <TracingTrigger></TracingTrigger>
    </OptionsPane>
  );
}
