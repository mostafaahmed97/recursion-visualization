import { useDispatch, useSelector } from 'react-redux';

import { Input } from '@/components/ui/input';
import { RootState } from '@/store';
import { updateN } from './fibonacciOptionsSlice';

export function FibonacciOptions() {
  const n = useSelector((state: RootState) => state.fibonacci.args.n);
  const dispatch = useDispatch();

  return (
    <>
      <small className="text-gray-500">n</small>
      <Input
        value={n}
        onChange={event => dispatch(updateN(event.target.value))}
      ></Input>
    </>
  );
}
