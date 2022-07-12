import { useContext, useState } from 'react';
import Cart from '../../assets/Cart.png';
import MyContext from '../../contexts/myContent';

import './styles.css'

export function Header() {  
    const { isActive, setActive } = useContext(MyContext);
    const { productsCart, setProductsCart } = useContext(MyContext);
    const [value, setValue] = useState(0)

    function valueTotal() {
        productsCart.map(e => {
            // let value = e.qtd * e.valueItems
                console.log(e.qtd)
            return
        })
    }

    valueTotal()

    // console.log(productsCart)

    return (
        <div className='content__menu'>
            <div className="menu__logo">
                <span className='title'>MKS</span>
                <span className='subTitle'>Sistemas</span>
            </div>
            <button className="menu__cart" onClick={() => setActive(!isActive)}>
                <img src={Cart} alt="Carrinho" />
                <span>${value}</span>
            </button>
        </div>
    )
}