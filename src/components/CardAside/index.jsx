import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Button } from '../ui/button'
import { CircleX } from 'lucide-react'

export function CardAside({ name, photo, id, qtd, cartItem }) {
  const { handleRemoveItemFromCart, handleAddQtdItem, handleRemoveQtdItem } =
    useContext(CartContext)

  return (
    <div className="flex border rounded-2xl justify-between py-2 px-4 items-center relative">
      <div className=" flex flex-col items-center">
        <img className="w-[46px]" src={photo} alt={name} />
        <span className="text-[13px] truncate max-w-[80px]">{name}</span>
      </div>

      <div className="text-[13px]">
        <span>Qtd:</span>
        <div className="border rounded flex justify-between gap-3">
          <button
            className="cursor-pointer hover:bg-destructive hover:text-black px-2 rounded"
            onClick={() => handleRemoveQtdItem(id)}
          >
            -
          </button>
          <span className="">{qtd}</span>
          <button
            className="cursor-pointer hover:bg-green-400 hover:text-black px-2 rounded"
            onClick={() => handleAddQtdItem(id)}
          >
            +
          </button>
        </div>
      </div>

      <span className="">R$ {parseFloat(cartItem.values).toFixed(2)}</span>

      <Button
        className="absolute top-[-5px] right-0 rounded-full hover:bg-destructive w-4 h-4"
        onClick={() => handleRemoveItemFromCart(cartItem)}
        variant={'ghost'}
        size={'icon'}
      >
        <CircleX />
      </Button>
    </div>
  )
}
