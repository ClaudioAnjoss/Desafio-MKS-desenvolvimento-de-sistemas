import { createContext, useState } from 'react'
import { toast } from 'sonner'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [menuToggled, setMenuToggled] = useState(false)
  const [product, SetProducts] = useState()
  const [cart, setCart] = useState([])

  function handleAddItemToCart(photo, name, price, id, qtd) {
    const values = qtd * price
    const itemObject = { photo, name, price, id, qtd, values }

    if (cart.length === 0) {
      setCart([...cart, itemObject])

      toast(`Você adicionou ${name} ao carrinho!`, {
        description: `Preço: R$ ${price} | Quantidade: ${qtd}`,
        action: {
          label: 'Fechar',
        },
        position: 'bottom-left',
      })
    } else {
      const filter = cart.filter((item) => item.id === id)

      if (filter.length === 0) {
        setCart([...cart, itemObject])

        toast(`Você adicionou ${name} ao carrinho!`, {
          description: `Preço: R$ ${price} | Quantidade: ${qtd}`,
          action: {
            label: 'Fechar',
          },
          position: 'bottom-left',
        })
      }
    }
  }

  function handleRemoveItemFromCart(clickedItemIndex) {
    const filteredCart = cart.filter(
      (product) => product.id !== clickedItemIndex.id,
    )
    setCart(filteredCart)

    toast('Item removido do carrinho!', {
      description: 'O produto foi retirado do seu carrinho.',
      action: {
        label: 'Fechar',
      },
      position: 'bottom-left',
    })
  }

  function handleAddQtdItem(id) {
    const copyCart = [...cart]
    const item = copyCart.find((product) => product.id === id)

    if (!item) {
      copyCart.push({ id, qtd: 1 })
    } else {
      item.qtd = item.qtd + 1
      item.values = item.qtd * item.price
    }
    setCart(copyCart)
  }

  function handleRemoveQtdItem(id) {
    const copyCart = [...cart]
    const item = copyCart.find((product) => product.id === id)

    if (item.qtd > 1) {
      item.qtd = item.qtd - 1
      item.values -= item.price
      setCart(copyCart)
    } else {
      const arrayFiltered = copyCart.filter((product) => product.id !== id)
      setCart(arrayFiltered)
    }
  }

  return (
    <CartContext.Provider
      value={{
        product,
        SetProducts,
        cart,
        setCart,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        handleAddQtdItem,
        handleRemoveQtdItem,
        menuToggled,
        setMenuToggled,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
