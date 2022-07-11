
import { useEffect, useState } from 'react';
import { GetProducts } from '../../scripts/GetProducts';
import { Card } from '../Card';
import { Skeleton } from '../Skeleton';

import './styles.css';

export function Main() {
    const [products, setProducts] = useState(false);

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