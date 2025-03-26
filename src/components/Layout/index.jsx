import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export function Layout() {
  const { carrinho, setCarrinho } = useContext(CartContext)
  const [loading, setLoading] = useState(true)

  // Carrega os dados do carrinho do localStorage
  useEffect(() => {
    const storeCart = localStorage.getItem('carrinho')

    if (storeCart) {
      setCarrinho(JSON.parse(storeCart))
    }
    setLoading(false)
  }, [setCarrinho])

  useEffect(() => {
    if (!loading && carrinho.length > 0) {
      localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
  }, [carrinho, loading])

  useEffect(() => {
    if (!loading && carrinho.length === 0) {
      localStorage.removeItem('carrinho')
    }
  }, [carrinho, loading])

  return (
    <div className="relative min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
