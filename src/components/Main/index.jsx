import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { Card } from '../Card';
import { Skeleton } from '../Skeleton'
import { GetProducts } from '../../scripts/GetProdutos';

import './styles.css';

export const Main = () => {
    const { product, SetProducts } = useContext(CartContext);

    useEffect(() => {
        setTimeout(() => {
            GetProducts().then(e => {
                SetProducts(e.products)
            })
        }, 2000)
    }, [])

    if (product) {
        return (
            <div className="content__main">
                <div className="content__card">
                    {product.map((cartItem, index) => {
                        return (<Card
                            key={index}
                            id={cartItem.id}
                            name={cartItem.name}
                            photo={cartItem.photo}
                            price={cartItem.price}
                            description={cartItem.description}
                            qtd={1}
                        />)
                    })}
                </div>
            </div>
        )
    } else {
        return (<div className="content__main">
            <div className="content__card">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>)
    }
}