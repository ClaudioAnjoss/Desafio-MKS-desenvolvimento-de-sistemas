import './styles.css';

import Bag from '../../assets/Bag.png'
import { useEffect } from 'react';
import { connect } from 'react-redux';


const Card = (props, listProducts) => {
    
    function addCart(id) {
        console.log(id)
        console.log(listProducts)
    }

    return (
        <div className="card">
            <img src={props.photo} alt={props.name} />

            <div className="content__title-value">
                <h1>{props.name}</h1>
                <span>R${props.price}</span>
            </div>

            <p>{props.description}</p>

            <button onClick={() => addCart(props.id)}>
                <img src={Bag} alt="Bag" />
                <span>Comprar</span>
            </button>
        </div>
    )
}
export default connect(state => ({ listProducts: state }))(Card)