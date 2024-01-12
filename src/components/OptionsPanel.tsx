import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

export default function OptionsPanel() {
  const OptionsPanel = styled.div`
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
  `;

  const mockCode = `function fib(){
    console.log('im a code snippet');
  }`;

  return (
    <OptionsPanel>
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        Recursion Visualizer
      </h1>

      <Separator className="my-2" />

      <DropdownMenu>
        <DropdownMenuTrigger className="my-2">Algorithms</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Fibonacci</DropdownMenuItem>
          <DropdownMenuItem>Merge Sort</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SyntaxHighlighter language="typescript">{mockCode}</SyntaxHighlighter>
      <Button className="my-2">Trace</Button>
    </OptionsPanel>
  );
}
