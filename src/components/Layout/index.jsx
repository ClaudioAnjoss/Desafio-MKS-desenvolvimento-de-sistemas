import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export function Layout() {
  const { cart, setCart } = useContext(CartContext)

  // Logica de armazenar carrinho no localStorage

  useEffect(() => {
    const storeCart = localStorage.getItem('cart')

    if (storeCart) {
      setCart(JSON.parse(storeCart))
    }
  }, [setCart])

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    if (cart.length === 0) {
      localStorage.clear()
    }
  }, [cart])

  return (
    <div className="">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
