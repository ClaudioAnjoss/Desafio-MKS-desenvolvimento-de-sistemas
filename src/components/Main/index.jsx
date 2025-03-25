import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Card } from '../Card'
import products from '../../database/products.json'
import SkeletonCard from '../SkeletonCard'

export const Main = () => {
  const { product, SetProducts } = useContext(CartContext)

  useEffect(() => {
    setTimeout(() => {
      if (SetProducts) {
        SetProducts(products)
      }
    }, 2000)
  }, [])

  return (
    <main className="container flex flex-wrap gap-3 mx-auto py-3 justify-center min-h-[90vh]">
      {product
        ? product.map((cartItem, index) => {
            return (
              <Card
                key={cartItem.id}
                id={cartItem.id}
                name={cartItem.name}
                photo={cartItem.photo}
                price={cartItem.price}
                description={cartItem.description}
                qtd={1}
              />
            )
          })
        : Array.from({ length: 8 }, (_, index) => <SkeletonCard key={index} />)}
    </main>
  )
}
