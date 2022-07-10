import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card } from '../Card';
import { CorsRequest } from 'cors';

import './styles.css';

export function Main() {
    const [products, setProducts] = useState();

    useEffect(() => {
        // axios.get('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC', { headers:  'Access-Control-Allow-Origin: *' } )
        //     .then((response) => setProducts(response.data))
        //     .catch((err) => {
        //         console.error("ops! ocorreu um erro" + err);
        //     });

        // console.log('lista de produtos:  ' + products)

        const url = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC';



        axios
            .get(url)
            .then((response) => setProducts(response.data))
            .catch(err => console.log('err', err));

        console.log('lista de produtos:  ' + products)

    }, [])

    return (
        <div className="content__main">
            <div className="content__card">
                <Card
                    key="1"
                    title="Apple Watch Series 4 GPS"
                    description="Redesigned from scratch and completely revised."
                    price="399"
                />
                <Card
                    key="2"
                    title="JBL Speaker"
                    description="Redesigned from scratch and completely revised."
                    price="199"
                />

            </div>
        </div>
    )
}