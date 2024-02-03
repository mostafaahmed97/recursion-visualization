import { useDispatch, useSelector } from 'react-redux';

import { Input } from '@/components/ui/input';
import { RootState } from '@/store';
import { updateNumberList } from './mergeSortSlice';

export function MergeSortOptions() {
  const dispatch = useDispatch();
  const val = useSelector((state: RootState) => state.mergeSort.rawInput);

  return (
    <>
      <small className="text-gray-500">Numbers list</small>

      <p>
        <small className="text-gray-500">Separate numbers by comma</small>
      </p>

      <Input
        value={val}
        onChange={event => dispatch(updateNumberList(event.target.value))}
      ></Input>
    </>
  );
}
