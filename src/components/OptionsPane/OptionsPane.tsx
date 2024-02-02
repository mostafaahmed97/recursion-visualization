import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '../VisualizationProvider';

import { Button } from '../ui/button';
import { OptionsPaneHeader } from './OptionsPaneHeader';
import { SelectedAlgorithmDisplay } from './SelectedAlgorithmDisplay';
import { Separator } from '../ui/separator';
import styled from 'styled-components';
import { useContext } from 'react';

export default function OptionsPanel(props: any) {
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

  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  return (
    <OptionsPane className="flex-col max-w-3xl">
      <OptionsPaneHeader></OptionsPaneHeader>

      <Separator className="my-2" />

      <SelectedAlgorithmDisplay></SelectedAlgorithmDisplay>

      <Separator className="my-2" />

      <div className="w-full">
        <Button
          className="w-full"
          onClick={() =>
            vizDispatch({
              type: 'start_trace',
            })
          }
        >
          Trace
        </Button>
      </div>
    </OptionsPane>
  );
}
