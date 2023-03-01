import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { thunks } from './thunks';
import { selectors } from './selectors';

interface ProductsState {
  list: [];
  productsStatus: status;
}

const initialState: ProductsState = {
  list: [],
  productsStatus: status.IDLE,
};

const slice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getProducts.pending, (state) => {
        state.productsStatus = status.PENDING;
      })
      .addCase(thunks.getProducts.fulfilled, (state, { payload }) => {
        // state.list = payload;
        state.productsStatus = status.SUCCESS;
      })
      .addCase(thunks.getProducts.rejected, (state) => {
        state.productsStatus = status.FAIL;
      });
  },
  initialState,
  name: 'products',
  reducers: {},
});

const products = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { products };
export default slice.reducer;
