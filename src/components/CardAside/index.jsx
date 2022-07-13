import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';

import './styles.css';

export function CardAside({ name, photo, price, id, qtd, cartItem}) {
    const { handleAddItemToCart, handleRemoveItemFromCart, handleAddQtdItem, handleRemoveQtdItem } = useContext(CartContext)

    return(
        <div className="content__card--aside">
            <div className="card__title-img">
                <img src={photo} alt={name} />
                <span>{name}</span>
            </div>
            <div className="card__increment-value">
                <div className="card__increment">
                    <span>Qtd:</span>
                    <div className="increment">
                        <button onClick={() => handleRemoveQtdItem(id)} className='decrement__button'>-</button>
                        <span className='increment__value'>{qtd}</span>
                        <button onClick={() => handleAddQtdItem(id)} className="increment__button">+</button>
                    </div>
                </div>

                <span className="card__value">R${cartItem.values}</span>
            </div>

            <button onClick={() => handleRemoveItemFromCart(cartItem)} className='close'>x</button>
        </div>
    )
}