
import { useContext, useEffect } from 'react';
import { GetProducts } from '../../scripts/GetProducts';
import { Card } from '../Card';
import { Skeleton } from '../Skeleton';

import MyContext from '../../contexts/myContent';
import './styles.css';

export function Main() {
    const { products, setProducts } = useContext(MyContext);
    const { productsCart, setProductsCart } = useContext(MyContext);

    function SetCart(id) {
        const copyProducts = [...products['products']]
        const copyProductsCart = [...productsCart]
        const item = copyProducts.find((product) => product.id == id);
        const arrayFiltered = copyProductsCart.filter(product => product.id == id);

        if (arrayFiltered.length == 0) {
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

    if (products) {
        return (
            <div className="content__main">
                <div className="content__card">
                    {(products['products'].map(data => {
                        return (<Card
                            key={data.id}
                            id={data.id}
                            title={data.name}
                            description={data.description}
                            price={data.price}
                            photo={data.photo}
                            cart={() => SetCart(data.id)}
                        />)
                    }))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="content__main">
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
            </div>
        )
    }
}