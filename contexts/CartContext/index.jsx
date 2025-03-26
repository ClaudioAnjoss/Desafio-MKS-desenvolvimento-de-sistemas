import { createContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import cupons from '@/database/cupons.json'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [produto, setProdutos] = useState()
  const [carrinho, setCarrinho] = useState([])
  const [precoTotal, setPrecoTotal] = useState(0)
  const [cupomAplicado, setCupomAplicado] = useState(false)
  const [precoTotalOriginal, setPrecoTotalOriginal] = useState(100)
  const [listaCupons] = useState(cupons)

  function adicionarItemAoCarrinho(foto, nome, preco, id, quantidade) {
    const valores = quantidade * preco
    const itemObjeto = { foto, nome, preco, id, quantidade, valores }

    if (carrinho.length === 0) {
      setCarrinho([...carrinho, itemObjeto])

      toast(`Você adicionou ${nome} ao carrinho!`, {
        description: `Preço: R$ ${preco} | Quantidade: ${quantidade}`,
        action: {
          label: 'Fechar',
        },
        position: 'bottom-left',
      })
    } else {
      const filtro = carrinho.filter((item) => item.id === id)

      if (filtro.length === 0) {
        setCarrinho([...carrinho, itemObjeto])

        toast(`Você adicionou ${nome} ao carrinho!`, {
          description: `Preço: R$ ${preco} | Quantidade: ${quantidade}`,
          action: {
            label: 'Fechar',
          },
          position: 'bottom-left',
        })
      }
    }
  }

  function removerItemDoCarrinho(indiceItemClicado) {
    const carrinhoFiltrado = carrinho.filter(
      (produto) => produto.id !== indiceItemClicado.id,
    )
    setCarrinho(carrinhoFiltrado)

    toast('Item removido do carrinho!', {
      description: 'O produto foi retirado do seu carrinho.',
      action: {
        label: 'Fechar',
      },
      position: 'bottom-left',
    })
  }

  function adicionarQtdItem(id) {
    const carrinhoCopia = [...carrinho]
    const item = carrinhoCopia.find((produto) => produto.id === id)

    if (!item) {
      carrinhoCopia.push({ id, quantidade: 1 })
    }

    if (item.quantidade < 10 && item.id === id) {
      item.quantidade = item.quantidade + 1
      item.valores = item.quantidade * item.preco
      setCarrinho(carrinhoCopia)
    } else {
      toast.error(
        'A quantidade máxima de 10 unidades deste item já foi adicionada ao carrinho.',
        {
          position: 'bottom-left',
        },
      )
    }
  }

  function removerQtdItem(id) {
    const carrinhoCopia = [...carrinho]
    const item = carrinhoCopia.find((produto) => produto.id === id)

    if (item.quantidade > 1) {
      item.quantidade = item.quantidade - 1
      item.valores -= item.preco
      setCarrinho(carrinhoCopia)
    } else {
      const arrayFiltrado = carrinhoCopia.filter((produto) => produto.id !== id)
      setCarrinho(arrayFiltrado)
    }
  }

  function aplicarCupom(codigoCupom) {
    if (cupomAplicado) {
      toast.error('Você já aplicou um cupom.', {
        position: 'bottom-left',
        description: 'Só é permitido aplicar um cupom por vez.',
      })
      return
    }

    const cupom = listaCupons.find((c) => c.codigo === codigoCupom)

    if (cupom) {
      const porcentagemDesconto = cupom.desconto / 100
      const precoDesconto = precoTotal * (1 - porcentagemDesconto)

      // Salva o valor original antes de aplicar o cupom
      setPrecoTotalOriginal(precoTotal)

      setPrecoTotal(parseFloat(precoDesconto.toFixed(2))) // Aplica o desconto com 2 casas decimais
      setCupomAplicado(true)

      toast.success(
        `Cupom ${codigoCupom} aplicado! Seu novo total é: R$ ${precoDesconto.toFixed(2)}`,
        {
          position: 'bottom-left',
          description: 'Desconto aplicado com sucesso!',
        },
      )
    } else {
      toast.error('Cupom inválido.', {
        position: 'bottom-left',
        description: 'O código do cupom não é válido.',
      })
    }
  }

  function desfazerCupom() {
    if (cupomAplicado) {
      setPrecoTotal(precoTotalOriginal)

      setCupomAplicado(false)

      toast.success('Cupom removido! Seu total foi restaurado.', {
        position: 'bottom-left',
        description: 'O valor do carrinho voltou ao normal.',
      })
    }
  }

  useEffect(() => {
    const total = carrinho.reduce((soma, item) => soma + item.valores, 0)
    setPrecoTotal(parseFloat(total).toFixed(2))
  }, [carrinho])

  return (
    <CartContext.Provider
      value={{
        produto,
        setProdutos,
        carrinho,
        setCarrinho,
        adicionarItemAoCarrinho,
        removerItemDoCarrinho,
        adicionarQtdItem,
        removerQtdItem,
        aplicarCupom,
        listaCupons,
        precoTotal,
        cupomAplicado,
        setCupomAplicado,
        desfazerCupom,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
