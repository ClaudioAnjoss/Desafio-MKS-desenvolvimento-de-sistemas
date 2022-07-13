import { useState, useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { Aside } from '../Aside';
import Cart from '../../assets/Cart.png';

import './styles.css'

export function Header() {
    const { menuToggled, setMenuToggled } = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext);
    const totalPrice = cart ? cart.reduce((acc, current) =>  acc + parseFloat(current.values), 0) : 0
    
    return (
        <div className='content__menu'>
            <div className="menu__logo">
                <span className='title'>MKS</span>
                <span className='subTitle'>Sistemas</span>
            </div>
            <button onClick={() => setMenuToggled(!menuToggled)} className="menu__cart">
                <img src={Cart} alt="Carrinho" />
                <span>${totalPrice}</span>
            </button>
        </div>
    )
}