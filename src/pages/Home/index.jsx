import { CartProvider } from '../../../contexts/CartContext'
import { Layout } from '../../components/Layout'

export function Home() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  )
}
