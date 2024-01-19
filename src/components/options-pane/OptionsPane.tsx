import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '../VisualizationProvider';

import { AlgorithmSelection } from './AlgorithmSelection';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
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
    <OptionsPanel className="max-w-3xl">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        Recursion Visualizer
      </h1>

      <Separator className="my-2" />

      <AlgorithmSelection></AlgorithmSelection>

      <Separator className="my-2" />

      <h3 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        {vizCxt.selectedAlgorithm}
      </h3>

      <div className="w-full max-w-full">
        <SyntaxHighlighter language="typescript">
          {vizCxt.displayCode}
        </SyntaxHighlighter>
      </div>

      <Button className="mt-auto">Trace</Button>
    </OptionsPanel>
  );
}
