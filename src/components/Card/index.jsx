import './styles.css';

import Bag from '../../assets/Bag.png'
import { useEffect } from 'react';

export function Card(props) {
    return (
        <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU93_VW_34FR+watch-40-alum-gold-nc-se_VW_34FR_WF_CO_GEO_BR?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171039000,1630712364000" alt="DESCRICAO" />

            <div className="content__title-value">
                <h1>{props.title}</h1>
                <span>R${props.price}</span>
            </div>

            <p>{props.description}</p>

            <button>
                <img src={Bag} alt="Bag" />
                <span>Comprar</span>
            </button>
        </div>
    )
}