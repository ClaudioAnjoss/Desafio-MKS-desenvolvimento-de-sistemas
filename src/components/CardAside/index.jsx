import React from 'react';

import './styles.css';

export function CardAside(props) {  
    // console.log(props) 
    return(
        <div className="content__card--aside">
            <div className="card__title-img">
                <img src={props.photo} alt={props.name} />
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