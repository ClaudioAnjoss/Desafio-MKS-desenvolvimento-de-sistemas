import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import './styles.css';

export function CardAside({ name, photo, price, id}) {
    const { handleAddItemToCart } = useContext(CartContext)

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
                        
                    </div>
                </div>

                <span className="card__value">R${price}</span>
            </div>
        </div>
    )
}