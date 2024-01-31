import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { RootState, selectedAlgorithm, updateSelection } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../ui/button';

export function AlgorithmSelection() {
  const selectedAlgorithm = useSelector(
    (state: RootState) => state.algorithmSelection.selectedAlgorithm
  );
  const availableAlgorithms = useSelector(
    (state: RootState) => state.algorithmSelection.availableAlgorithms
  );

  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-auto my-2">
        <Button size="sm">Select Algorithm</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={selectedAlgorithm}
          onValueChange={value =>
            dispatch(updateSelection({ selectedAlg: value }))
          }
        >
          {availableAlgorithms.map(alg => (
            <DropdownMenuRadioItem value={alg}>{alg}</DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
