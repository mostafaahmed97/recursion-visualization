import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  VisualizationContext,
  VisualizationDispatchContext,
} from '../VisualizationProvider';

import { Button } from '../ui/button';
import { useContext } from 'react';

export function AlgorithmSelection() {
  const vizCxt = useContext(VisualizationContext);
  const vizDispatch = useContext(VisualizationDispatchContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-auto my-2">
        <Button size="sm">Select Algorithm</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={vizCxt.selectedAlgorithm}
          onValueChange={value =>
            vizDispatch({ type: 'update_selection', algorithmName: value })
          }
        >
          {vizCxt.availableAlgorithms.map(algo => (
            <DropdownMenuRadioItem value={algo.name}>
              {algo.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
