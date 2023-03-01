import { useDispatch } from 'react-redux';
import { products } from 'store/products';

export default function DashboardPage() {
  const dispatch = useDispatch();
  dispatch(products.thunks.getProducts());

  return <h2>DashboardPage</h2>;
}
