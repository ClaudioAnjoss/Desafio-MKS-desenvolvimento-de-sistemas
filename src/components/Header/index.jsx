import { useState, useContext } from 'react';
import { Aside } from '../Aside';
import Cart from '../../assets/Cart.png';

import './styles.css'

export function Header() {
    

    

    const [menuToggled, setMenuToggled] = useState(false);

    const ToggleMenu = () => {
        menuToggled ? setMenuToggled(false) : setMenuToggled(true);
    }

    return (
        <div className='content__menu'>
            <div className="menu__logo">
                <span className='title'>MKS</span>
                <span className='subTitle'>Sistemas</span>
            </div>
            <button className="menu__cart" onClick={ToggleMenu}>
                <img src={Cart} alt="Carrinho" />
                <span>$99</span>
            </button>

            <Aside data={menuToggled} />
        </div>
    )
}