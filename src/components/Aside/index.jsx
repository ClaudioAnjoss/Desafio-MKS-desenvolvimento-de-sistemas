import { useState, useEffect, createContext, useContext } from 'react';
import MyContext from '../../contexts/myContent';
import { CardAside } from '../CardAside'

import './styles.css';

export function Aside(props) {
    const [isActive, setActive] = useState(false);
    const { productsCart, setProductsCart } = useContext(MyContext);

    function AddProducToCart(id) {  
        const copyProductsCart = [...productsCart];    
        const item = copyProductsCart.find((product) => product.id == id.target.id);
    
        if (!item) {
            copyProductsCart.push({id: id, qtd: 1})
        } else {
            item.qtd = item.qtd + 1
        }    
        setProductsCart(copyProductsCart)    
    }

    function RemoveProducToCart(id) { 
        const copyProductsCart = [...productsCart];    
        const item = copyProductsCart.find((product) => product.id == id.target.id);
    
        if(item.qtd > 1) {
            item.qtd = item.qtd - 1;
            setProductsCart(copyProductsCart)
        } else {
            const arrayFiltered = copyProductsCart.filter(product => product.id != id.target.id);
            setProductsCart(arrayFiltered)
        }
    }



    const handleToggle = () => {
        setActive(!isActive)
    };

    useEffect(() => {
        setActive(!isActive)
        setProductsCart([{id:2, qtd: 3, name: 'Apple Watch', price: 200}])
    }, [props.data])

    return (
        <div className={isActive ? 'content__aside' : 'content__aside active'}>
            <div className="content__title-toggle">
                <h1>Carrinho de compras</h1>
                <button onClick={handleToggle}>X</button>
            </div>

            {productsCart ? productsCart.map(e => {
                return <CardAside 
                key={e.id} 
                id={e.id}
                qtd={e.qtd}
                name={e.name}
                price={e.price}
                value={{ AddProducToCart, RemoveProducToCart}}
                 />
            }) : console.log('esta vazio')}
            

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