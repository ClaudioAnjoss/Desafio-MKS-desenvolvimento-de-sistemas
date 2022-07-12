import { useContext } from 'react';
import MyContext from '../../contexts/myContent';
import { CardAside } from '../CardAside'

import './styles.css';

export function Aside(props) {
    const { productsCart, setProductsCart } = useContext(MyContext);
    const { isActive, setActive } = useContext(MyContext);

    function AddProducToCart(id) {
        const copyProductsCart = [...productsCart];
        const item = copyProductsCart.find((product) => product.id == id.target.id);

        if (!item) {
            copyProductsCart.push({ id: id, qtd: 1 })
        } else {
            item.qtd = item.qtd + 1
            item.valueItems = item.qtd * item.price
        }
        setProductsCart(copyProductsCart)
    }

    function RemoveProducToCart(id) {
        const copyProductsCart = [...productsCart];
        const item = copyProductsCart.find((product) => product.id == id.target.id);

        if (item.qtd > 1) {
            item.qtd = item.qtd - 1;
            item.valueItems -= item.price
            setProductsCart(copyProductsCart)
        } else {
            const arrayFiltered = copyProductsCart.filter(product => product.id != id.target.id);
            setProductsCart(arrayFiltered)
        }
    }

    if (productsCart.length > 0) {
        return (
            <div className={isActive ? 'content__aside active' : 'content__aside'}>
                <div className="content__title-toggle">
                    <h1>Carrinho de compras</h1>
                    <button onClick={() => setActive(!isActive)}>X</button>
                </div>
                {productsCart.map(e => {
                    return <CardAside
                        key={e.id}
                        id={e.id}
                        photo={e.photo}
                        name={e.name}
                        qtd={e.qtd}
                        price={e.valueItems}
                        value={{ AddProducToCart, RemoveProducToCart }}
                    />
                })}
                <div className="content__total-purchase">
                    <div className="content__total">
                        <span>Total:</span>
                        <span>RS798</span>
                    </div>

                    <button>Finalizar Compra</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={isActive ? 'content__aside active' : 'content__aside'}>
                <div className="content__title-toggle">
                    <h1>Carrinho de compras</h1>
                    <button onClick={() => setActive(!isActive)}>X</button>
                </div>
                <img className='cart__logo' src="https://images.tcdn.com.br/files/1061254/themes/31/img/settings/CarrinhoDeCesta.gif?3de8f596ab694285c1e81aba40ca6ea0" alt="Cart" />
                <div className="content__total-purchase">
                    <div className="content__total">
                        <span>Adicione itens no seu carrinho</span>
                    </div>
                </div>
            </div>
        )
    }
}