import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import Bag from '../../assets/Bag.png'

export const Card = ({ nome, preco, foto, descricao, quantidade, id }) => {
  const { carrinho, adicionarItemAoCarrinho } = useContext(CartContext)
  const [hasCart, setHasCart] = useState(false)

  useEffect(() => {
    setHasCart(!!carrinho.filter((e) => e.id === id).length > 0)
  }, [adicionarItemAoCarrinho])

  return (
    <div className="w-[217px] h-[285px] bg-white shadow rounded overflow-hidden flex flex-col justify-between items-center">
      <img className="object-cover h-32" src={foto} alt={nome} />

      <div className="flex text-sm justify-between  items-center w-full px-2 border-b py-1">
        <h1 className="truncate max-w-28">{nome}</h1>
        <span className="border p-1 rounded-sm bg-primary text-white">
          R${parseFloat(preco).toFixed(2)}
        </span>
      </div>

      <p className="text-[12px] p-2 h-full max-h-[82px] max-w-[217px]">
        {descricao}
      </p>

      <button
        className={` text-white w-full flex items-center justify-center gap-2 py-1.5  cursor-pointer active:scale-105  transition-all min-h-[36px] ${hasCart ? 'bg-gray-400 cursor-not-allowed active:bg-primary' : 'bg-primary hover:bg-green-500 active:bg-green-400'}`}
        onClick={() =>
          adicionarItemAoCarrinho(foto, nome, preco, id, quantidade)
        }
        disabled={hasCart}
      >
        <img src={Bag} alt="Bag" />
        {!hasCart && <span>Adicionar ao carrinho</span>}
        {hasCart && <span>Adicionado</span>}
      </button>
    </div>
  )
}
