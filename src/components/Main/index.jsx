import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Card } from '../Card'
import products from '../../database/products.json'
import SkeletonCard from '../SkeletonCard'

export const Main = () => {
  const { produto, setProdutos } = useContext(CartContext)

  useEffect(() => {
    setTimeout(() => {
      if (setProdutos) {
        setProdutos(products)
      }
    }, 2000)
  }, [])

  return (
    <main className="container flex flex-wrap gap-3 mx-auto py-3 justify-center min-h-[90vh]">
      {produto
        ? produto.map((cartItem, index) => {
            return (
              <Card
                key={cartItem.id}
                id={cartItem.id}
                nome={cartItem.nome}
                foto={cartItem.foto}
                preco={cartItem.preco}
                descricao={cartItem.descricao}
                quantidade={1}
              />
            )
          })
        : Array.from({ length: 8 }, (_, index) => <SkeletonCard key={index} />)}
    </main>
  )
}
