import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  VisualizationContext,
  VisualizationDispatchContext,
} from './VisualizationProvider';

import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { factorial } from '@/algorithms/fact';
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
  `;

  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  return (
    <OptionsPanel>
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        Recursion Visualizer
      </h1>
      <Separator className="my-2" />

      <DropdownMenu>
        <DropdownMenuTrigger className="my-2">
          <Button>Select Algorithm</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={vizCxt.selectedAlgorithm}
            onValueChange={value => console.log(value)}
          >
            {vizCxt.availableAlgorithms.map(algo => (
              <DropdownMenuRadioItem value={algo.name}>
                {algo.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <SyntaxHighlighter language="typescript">
        {vizCxt.displayCode}
      </SyntaxHighlighter>

      <input
        type="text"
        onChange={e => {
          console.log({ props });
          props.onChange(parseInt(e.target.value));
        }}
        value={props.val}
      />

      <Button className="mt-auto">Trace</Button>
    </OptionsPanel>
  );
}
