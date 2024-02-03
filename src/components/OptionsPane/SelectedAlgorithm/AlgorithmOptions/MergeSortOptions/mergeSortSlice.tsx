import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface MergeSortSlice {
  rawInput: string;
  args: { numbers: number[] };
}

const initialState: MergeSortSlice = {
  rawInput: '',
  args: {
    numbers: [],
  },
};

export const mergeSortSlice = createSlice({
  name: 'Merge Sort Options',
  initialState,
  reducers: {
    updateNumberList: (state, action: PayloadAction<string>) => {
      try {
        const numbers = action.payload
          .trim()
          .replace(' ', '')
          .split(',')
          .map(n => Number(n));

        state.args.numbers = numbers;
      } catch (error) {
        // TODO: toast to notify of error
      } finally {
        state.rawInput = action.payload;
      }
    },
  },
});

export const { updateNumberList } = mergeSortSlice.actions;
