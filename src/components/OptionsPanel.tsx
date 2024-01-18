import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
    height: 100%;
  `;

  const vizCxt = useContext(VisualizationContext);
  const vizdispatch = useContext(VisualizationDispatchContext);
  return (
    <OptionsPanel>
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        Recursion Visualizer
      </h1>
      <h2>{vizCxt.test}</h2>
      <button onClick={vizdispatch}>Testing dispatch</button>
      <Separator className="my-2" />

      <input
        type="text"
        onChange={e => {
          console.log({ props });
          props.onChange(parseInt(e.target.value));
        }}
        value={props.val}
      />

      {/* <DropdownMenu>
        <DropdownMenuTrigger className="my-2">Algorithms</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Fibonacci</DropdownMenuItem>
          <DropdownMenuItem>Merge Sort</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}

      <SyntaxHighlighter language="typescript">
        {factorial.toString()}
      </SyntaxHighlighter>
      <Button className="mt-auto">Trace</Button>
    </OptionsPanel>
  );
}
