import {createSlice} from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ICart {
  items: Product[];
}

export const cartInitialState: ICart = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    add: (state, action) => {
      const newProduct = action.payload.product;

      const productExists = state.items.find(
        // @ts-ignore
        product => product.id === newProduct.id,
      );

      if (!productExists) {
        // @ts-ignore
        state.items.push(newProduct);
      }
    },
    remove: (state, action) => {
      const id = action.payload.productId;

      // @ts-ignore
      state.items = state.items.filter(product => product.id !== id);
    },
    clear: state => {
      state.items = [];
    },
  },
});

export const {add, clear, remove} = cartSlice.actions;

export const counterReducer = cartSlice.reducer;
