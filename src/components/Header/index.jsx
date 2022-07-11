import { useContext } from 'react';
import Cart from '../../assets/Cart.png';
import MyContext from '../../contexts/myContent';

import './styles.css'

export function Header() {  
    const { isActive, setActive } = useContext(MyContext);
    const { productsCart, setProductsCart } = useContext(MyContext);

    console.log(productsCart)

    const handleToggle = () => {
        isActive ? setActive(false) : setActive(true);
    }

    return (
        <div className='content__menu'>
            <div className="menu__logo">
                <span className='title'>MKS</span>
                <span className='subTitle'>Sistemas</span>
            </div>
            <button className="menu__cart" onClick={handleToggle}>
                <img src={Cart} alt="Carrinho" />
                <span>$99</span>
            </button>
        </div>
    )
}