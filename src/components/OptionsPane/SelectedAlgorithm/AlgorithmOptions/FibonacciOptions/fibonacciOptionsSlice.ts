import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FactorialOptions {
  rawInput: string;
  args: {
    n: number;
  };
}

const initialState: FactorialOptions = {
  rawInput: '3',
  args: { n: 3 },
};

export const fibonacciSlice = createSlice({
  name: 'Fibonacci Optiosn',
  initialState,
  reducers: {
    updateN: (state, action: PayloadAction<string>) => {
      try {
        const n = parseInt(action.payload);
        state.args.n = n;
      } catch (error) {
        console.log(error);
      }

      return state;
    },
  },
});

export const { updateN } = fibonacciSlice.actions;
