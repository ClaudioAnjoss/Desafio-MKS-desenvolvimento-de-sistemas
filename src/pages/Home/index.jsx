import { CartProvider } from '../../../contexts/CartContext';

import { Layout } from '../../components/Layout'
import './styles.css';

export function Home() {

  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  )
}
