import React from 'react';

import './styles.css';

export function CardAside(props) {  
    // console.log(props) 
    return(
        <div className="content__card--aside">
            <div className="card__title-img">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU93_VW_34FR+watch-40-alum-gold-nc-se_VW_34FR_WF_CO_GEO_BR?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171039000,1630712364000" alt="DESCRICAO" />
                <span>{props.name}</span>
            </div>
            <div className="card__increment-value">
                <div className="card__increment">
                    <span>Qtd:</span>
                    <div className="increment">
                        <button id={props.id} onClick={props.value.RemoveProducToCart}  className='decrement__button'>-</button>
                        <span className='increment__value'>{props.qtd}</span>
                        <button id={props.id} onClick={props.value.AddProducToCart} className="increment__button">+</button>
                    </div>
                </div>

                <span className="card__value">R${props.price}</span>
            </div>
        </div>
    )
}