import { useState, useContext } from 'react';
import { Aside } from '../Aside';
import Cart from '../../assets/Cart.png';

import './styles.css'
import { CartContext } from '../../../contexts/CartContext';

export function Header() {
    const { menuToggled, setMenuToggled } = useContext(CartContext)
    
    return (
        <div className='content__menu'>
            <div className="menu__logo">
                <span className='title'>MKS</span>
                <span className='subTitle'>Sistemas</span>
            </div>
            <button onClick={() => setMenuToggled(!menuToggled)} className="menu__cart">
                <img src={Cart} alt="Carrinho" />
                <span>$99</span>
            </button>
        </div>
    )
}