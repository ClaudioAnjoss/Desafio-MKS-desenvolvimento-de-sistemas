import { CartContext } from '../../../contexts/CartContext';
import { useContext } from 'react';
import { CardAside } from '../CardAside';

import './styles.css';

export function Aside() {
    const { menuToggled, setMenuToggled } = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext);
    const totalPrice = cart ? cart.reduce((acc, current) =>  acc + parseFloat(current.values), 0) : 0

    if (cart && cart.length > 0) {
        return (
            <div className={menuToggled ? 'content__aside active' : 'content__aside'}>
                <div className="content__title-toggle">
                    <h1>Carrinho de compras</h1>
                    <button onClick={() => setMenuToggled(!menuToggled)}>X</button>
                </div>
                {cart.map((CartItem, index) => {
                    return (
                        <CardAside
                            key={index}
                            id={CartItem.id}
                            name={CartItem.name}
                            price={CartItem.price}
                            photo={CartItem.photo}
                            qtd={CartItem.qtd}
                            cartItem={CartItem}
                        />
                    )
                })}
                <div className="content__total-purchase">
                    <div className="content__total">
                        <span>Total:</span>
                        <span>RS{totalPrice}</span>
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
            </div>
        )
    }


}