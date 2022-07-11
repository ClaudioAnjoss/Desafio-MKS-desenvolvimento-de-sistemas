import { Card } from '../Card';
import { connect } from 'react-redux';

import './styles.css';

const Main = (products) => {
    console.log(products)
    return (
        <div className="content__main">
            <div className="content__card">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default connect(state => ({ products: state}))(Main)