import { CartContext } from '../../../contexts/CartContext'
import { useContext } from 'react'
import { CardAside } from '../CardAside'

import { Button } from '../ui/button'
import { toast } from 'sonner'
import Collapse from '../Collapse'

export function Aside() {
  const { carrinho, setCarrinho, precoTotal, cupomAplicado, desfazerCupom } =
    useContext(CartContext)

  return (
    <>
      <div className="h-[90vh] flex flex-col justify-between p-2">
        {carrinho.length > 0 && (
          <div
            className=" overflow-y-auto overflow-x-hidden flex flex-col gap-2 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carrinho.map((CartItem, index) => (
              <CardAside
                key={index}
                id={CartItem.id}
                nome={CartItem.nome}
                preco={CartItem.preco}
                foto={CartItem.foto}
                quantidade={CartItem.quantidade}
                valores={CartItem.valores}
                cartItem={CartItem}
              />
            ))}
          </div>
        )}

        {!carrinho.length && (
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <span className="font-light text-2xl">Carrinho Vazio</span>
            <img
              className=""
              src="https://cdn-icons-png.flaticon.com/128/4555/4555971.png"
              alt="carrinho"
            />
          </div>
        )}

        <div>
          {carrinho.length > 0 && (
            <>
              {cupomAplicado ? (
                <div className=" my-1 p-1 flex items-center justify-between">
                  <span>Cupom aplicado</span>
                  <Button
                    className="cursor-pointer"
                    variant={'link'}
                    onClick={() => desfazerCupom()}
                  >
                    Desfazer
                  </Button>
                </div>
              ) : (
                <Collapse />
              )}

              <Button
                className="w-full my-2 cursor-pointer"
                onClick={() => {
                  setCarrinho([])
                  localStorage.clear()

                  toast('Carrinho limpo!', {
                    description:
                      'Todos os itens foram removidos do seu carrinho.',
                    action: {
                      label: 'Fechar',
                    },
                    position: 'bottom-left',
                  })
                }}
              >
                Limpar carrinho
              </Button>
              <div className="flex justify-between">
                <span className="text-lg">Total: R$ {precoTotal}</span>
                <Button className="cursor-pointer bg-green-400 hover:bg-green-800">
                  Finalizar Compra
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
