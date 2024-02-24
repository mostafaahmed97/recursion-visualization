import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const factorialSlice = createSlice({
  name: 'Factorial Options',
  initialState: {
    rawInput: '3',
    args: { n: 3 },
  },
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
  selectors: {
    n: state => state.args.n,
  },
});

export const { updateN } = factorialSlice.actions;
