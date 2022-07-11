import { createContext, useState } from 'react';

import Bag from '../../assets/Bag.png';
import './styles.css';

export function Card(props) {
    // console.log(props)
    return (
        <div className="card">
            <img src={props.photo} alt={props.title} />

            <div className="content__title-value">
                <h1>{props.title}</h1>
                <span>R${props.price}</span>
            </div>

            <p>{props.description}</p>

            <button type="button" id={props.id} onClick={props.cart}>
                <img src={Bag} alt="Bag" />
                Comprar
            </button>
        </div>
    )
}