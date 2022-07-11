
import { useContext, useEffect, useState } from 'react';
import MyContext from '../../contexts/myContent';
import { GetProducts } from '../../scripts/GetProducts';
import { Card } from '../Card';
import { Skeleton } from '../Skeleton';

import './styles.css';

export function Main() {
    const { products, setProducts } = useContext(MyContext);
    const { productsCart, setProductsCart } = useContext(MyContext);

    function getProducts(id) {
        const copyProducts = [...products['products']]
        const copyProductsCart = [...productsCart]
        const item = copyProducts.find((product) => product.id == id.target.id);        
        const arrayFiltered = copyProductsCart.filter(product => product.id == id.target.id);
            console.log(arrayFiltered)

        if(arrayFiltered.length != 0) {
            console.log('true');
        } else {
            item['qtd'] = 1
            item['valueItems'] = parseFloat(item.price) 
            item['valueTotal'] = 0
            setProductsCart([...productsCart, item])
        }
    }

    useEffect(() => {
        GetProducts().then((data) => {
            setProducts(data)
        })
    }, [])

    return (
        <div className="content__main">
            <div className="content__card">
                {(products) ? (products['products'].map(data => {
                    return (
                        <Card
                            key={data.id}
                            id={data.id}
                            title={data.name}
                            description={data.description}
                            price={data.price}
                            photo={data.photo}
                            cart={getProducts}
                        />
                    )

                })) :
                    <>
                        <Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton />
                    </>}

            </div>
        </div>
    )
}