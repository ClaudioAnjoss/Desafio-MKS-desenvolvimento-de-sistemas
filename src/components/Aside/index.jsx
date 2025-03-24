import { CartContext } from '../../../contexts/CartContext'
import { useContext } from 'react'
import { CardAside } from '../CardAside'

import { Button } from '../ui/button'

export function Aside() {
  const { cart, setCart } = useContext(CartContext)
  const totalPrice = cart
    ? cart.reduce((acc, current) => acc + parseFloat(current.values), 0)
    : 0

  console.log(cart)

  return (
    <>
      <div className="h-[90vh] flex flex-col justify-between p-2">
        {cart.length > 0 && (
          <div
            className=" overflow-y-auto overflow-x-hidden flex flex-col gap-2 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cart.map((CartItem, index) => (
              <CardAside
                key={index}
                id={CartItem.id}
                name={CartItem.name}
                price={CartItem.price}
                photo={CartItem.photo}
                qtd={CartItem.qtd}
                cartItem={CartItem}
              />
            ))}
            <Button onClick={() => setCart([])}>Limpar carrinho</Button>
          </div>
        )}

        {!cart.length && (
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <span className="font-light text-2xl">Carrinho Vazio</span>
            <img
              className=""
              src="https://cdn-icons-png.flaticon.com/128/4555/4555971.png"
              alt="cart"
            />
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-lg">
            Total: R$ {parseFloat(totalPrice).toFixed(2)}
          </span>
          {cart.length > 0 && (
            <Button className="cursor-pointer hover:bg-green-400">
              Finalizar Compra
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
