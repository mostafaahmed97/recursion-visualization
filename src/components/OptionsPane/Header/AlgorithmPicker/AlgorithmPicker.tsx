import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  availableAlgs,
  selectedAlgorithm,
  updateSelection,
} from '@/components/OptionsPane/optionsPaneSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/ui/button';

export function AlgorithmPicker() {
  const currentSelection = useSelector(selectedAlgorithm);
  const options = useSelector(availableAlgs);

  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-auto my-2">
        <Button size="sm">Select Algorithm</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={currentSelection}
          onValueChange={value => dispatch(updateSelection(value))}
        >
          {options.map(alg => (
            <DropdownMenuRadioItem value={alg}>{alg}</DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
