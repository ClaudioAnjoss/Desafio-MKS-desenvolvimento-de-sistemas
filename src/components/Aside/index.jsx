import { useContext } from 'react';
import './styles.css';

import { CardAside } from '../CardAside'
import { CartContext } from '../../../contexts/CartContext';

export function Aside() {
    const { menuToggled, setMenuToggled } = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext);

    if (cart && cart.length > 0) {
        return (
            <div className={menuToggled ? 'content__aside active' : 'content__aside'}>
                <div className="content__title-toggle">
                    <h1>Carrinho de compras</h1>
                    <button onClick={() => setMenuToggled(!menuToggled)}>X</button>
                </div>
                {cart.map((CartItem, index) => {
                    console.log(CartItem)
                    return (
                        <CardAside
                            key={index}
                            id={CartItem.id}
                            name={CartItem.name}
                            price={CartItem.price}
                            photo={CartItem.photo}
                        />
                    )
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
            <div className={menuToggled ? 'content__aside active' : 'content__aside'}>
                <div className="content__title-toggle">
                    <h1>Carrinho de compras</h1>
                    <button onClick={() => setMenuToggled(!menuToggled)}>X</button>
                </div>
                <img className='cart__logo' src="https://cdn-icons-png.flaticon.com/128/4555/4555971.png" alt="cart" />
                <div className="content__total-purchase">
                    <div className="content__total">
                        <span>Total:</span>
                        <span>RS798</span>
                    </div>

                    <button>Finalizar Compra</button>
                </div>
            </div>
        )
    }


}