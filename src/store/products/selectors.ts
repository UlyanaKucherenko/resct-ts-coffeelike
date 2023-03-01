import { RootState } from 'store';

const selectors = {
  list: (state: RootState) => state.products.list,
  productsStatus: (state: RootState) => state.products.productsStatus,
};

export { selectors };
