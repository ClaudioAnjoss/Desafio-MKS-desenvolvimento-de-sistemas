import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { ShoppingCart } from 'lucide-react'
import { Aside } from '../Aside'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export function Header() {
  const { cart } = useContext(CartContext)
  const totalPrice = cart
    ? cart.reduce((acc, current) => acc + parseFloat(current.values), 0)
    : 0

  return (
    <section className="bg-primary max-h-[80px]">
      <div className="container flex justify-between mx-auto text-white py-2">
        <div className="">
          <span className="text-[40px] font-medium">MKS</span>
          <span className="text-[20px] font-mono">Sistemas</span>
        </div>

        <Sheet>
          <SheetTrigger>
            <button className="bg-secondary flex items-center p-3 font-semibold cursor-pointer rounded-sm text-primary gap-1">
              <ShoppingCart />
              {totalPrice > 0 ? (
                <span>${parseFloat(totalPrice).toFixed(2)}</span>
              ) : (
                ''
              )}
            </button>
          </SheetTrigger>
          <SheetContent className="bg-secondary">
            <SheetHeader>
              <SheetTitle>Carrinho</SheetTitle>
              <SheetDescription className="">
                Confira os itens no seu carrinho e finalize a compra quando
                estiver pronto.
                <Aside />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  )
}
