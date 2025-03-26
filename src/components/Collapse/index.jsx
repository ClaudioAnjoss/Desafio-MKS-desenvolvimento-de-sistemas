import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useState, useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export default function Collapse() {
  const { listaCupons, aplicarCupom } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-lg font-semibold text-primary-600">
          {listaCupons.length}{' '}
          {listaCupons.length === 1 ? 'cupom disponível' : 'cupons disponíveis'}
        </h4>
        <p className="text-sm text-gray-600">
          Aproveite os descontos exclusivos para aplicar no seu carrinho!
        </p>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0 cursor-pointer">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-2">
        {listaCupons.map((coupon) => (
          <Button
            variant={'ghost'}
            key={coupon.codigo}
            onClick={() => aplicarCupom(coupon.codigo)}
            className="w-full flex justify-between items-center rounded-md border px-4 py-3 font-mono text-sm cursor-pointer"
          >
            <span>{coupon.codigo}</span>
            <span>{coupon.desconto}% de desconto</span>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
