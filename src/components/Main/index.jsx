import Card from '../Card';
import { connect } from 'react-redux';

import './styles.css';
import { useEffect, useState } from 'react';
import { GetProducts } from '../../scripts/GetProdutos';



const Main = (listProducts) => {
    const [product, SetProducts] = useState([])
    const teste = product.map(e => {
        return e
    })
    listProducts = [...teste]

    useEffect(() => {
        GetProducts().then(e => {
            SetProducts([...e.products])
        })
    }, [])

    if (product.length > 1) {
        return (
            <div className="content__main">
                <div className="content__card">
                    {listProducts.map(res => {
                        return (
                            <Card
                                key={res.id}
                                id={res.id}
                                name={res.name}
                                photo={res.photo}
                                price={res.price}
                                description={res.description}
                            />
                        )
                    })}

                </div>
            </div>
        )
    } else {
        console.log('carregando')
    }

}

export default connect(state => ({ listProducts: state }))(Main)