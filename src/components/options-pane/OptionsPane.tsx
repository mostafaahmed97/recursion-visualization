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
  const OptionsPanel = styled.div`
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: 40vw;
  `;

  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  return (
    <OptionsPanel className="flex-col max-w-3xl">
      <OptionsPaneHeader></OptionsPaneHeader>
      <Separator className="my-2" />

      <SelectedAlgorithmDisplay></SelectedAlgorithmDisplay>

      <Separator className="my-2" />

      <div>
        <Button>Trace</Button>
      </div>
    </OptionsPanel>
  );
}
