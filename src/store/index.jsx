import { createStore } from 'redux';
import { useState } from 'react';

import axios from 'axios';

const url = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC';

export const GetProducts = async products => {
    await axios.get(url, { headers: { 'Access-Control-Allow-Origin': true } })
        .then((response) => {
            products = response.data
        })
        .catch(err => console.log('err', err))
    return products
}
   

const reducer = () => {

    // console.log(GetProducts())
}

const store = createStore(reducer);

export default store;