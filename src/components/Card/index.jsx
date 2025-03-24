import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import Bag from '../../assets/Bag.png'

// import './styles.css'

export const Card = ({ name, price, photo, description, qtd, id }) => {
  const { handleAddItemToCart } = useContext(CartContext)

  return (
    <div className="w-[217px] h-[285px] bg-white shadow rounded overflow-hidden flex flex-col justify-between items-center">
      <img className="object-cover h-32" src={photo} alt={name} />

      <div className="flex text-sm justify-between  items-center w-full px-2 border-b py-1">
        <h1 className="truncate max-w-28">{name}</h1>
        <span className="border p-1 rounded-sm bg-primary text-white">
          R${parseFloat(price).toFixed(2)}
        </span>
      </div>

      <p className="text-[12px] p-2 h-full max-h-[82px] max-w-[217px]">
        {description}
      </p>

      <button
        className="bg-primary text-white w-full flex items-center justify-center gap-2 py-1.5 hover:bg-green-500 cursor-pointer active:scale-105 active:bg-green-400 transition-all min-h-[36px]"
        onClick={() => handleAddItemToCart(photo, name, price, id, qtd)}
      >
        <img src={Bag} alt="Bag" />
        <span>Comprar</span>
      </button>
    </div>
  )
}
