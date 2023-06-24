import {configureStore} from '@reduxjs/toolkit';
import {cartSlice} from '../reducers/cart.reducer';

export const cartStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
