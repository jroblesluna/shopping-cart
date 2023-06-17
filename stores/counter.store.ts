import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from '../reducers/counter.reducer';

export const counterStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
