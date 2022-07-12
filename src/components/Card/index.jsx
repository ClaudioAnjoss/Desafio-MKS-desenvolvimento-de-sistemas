import './styles.css';

import Bag from '../../assets/Bag.png'
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';


export const Card = ({ name, price, photo, description, qtd, id }) => {
    const { handleAddItemToCart } = useContext(CartContext)    

    return (
        <div className="card">
            <img src={photo} alt={name} />

            <div className="content__title-value">
                <h1>{name}</h1>
                <span>R${price}</span>
            </div>

            <p>{description}</p>

            <button onClick={() => handleAddItemToCart(photo, name, price, id, qtd = 1)}>
                <img src={Bag} alt="Bag" />
                <span>Comprar</span>
            </button>
        </div>
    )
}