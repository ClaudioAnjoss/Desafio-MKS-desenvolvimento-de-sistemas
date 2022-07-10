import { useState } from 'react';
import './styles.css';

import { CardAside } from '../CardAside'
import { useEffect } from 'react';

export function Aside(props) {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive)
    };

    useEffect(() => {
        setActive(!isActive)
    }, [props.data])

    return (
        <div className={isActive ? 'content__aside' : 'content__aside active'}>
            <div className="content__title-toggle">
                <h1>Carrinho de compras</h1>
                <button onClick={handleToggle}>X</button>
            </div>

            <CardAside />
            <CardAside />

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