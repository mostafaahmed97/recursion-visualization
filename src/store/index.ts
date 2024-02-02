import { configureStore } from '@reduxjs/toolkit';
import { optionsPaneSlice } from '@/components/OptionsPane/optionsPaneSlice';

export const store = configureStore({
  reducer: {
    optionsPane: optionsPaneSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
