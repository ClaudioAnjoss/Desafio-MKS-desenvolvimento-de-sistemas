import { createStore } from 'redux';

function reducer() {
    return [
        {
            teste: 'funcionando'
        }
    ];
}

const store = createStore(reducer);

export default store;