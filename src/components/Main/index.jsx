import { Card } from '../Card';
import { connect } from 'react-redux';

import './styles.css';

const Main = (module) => {

    console.log(module)    

    // module().then(e => {console.log(e)})
    return (
        <div className="content__main">
            <div className="content__card">
                <button onClick={() => console.log(module)} >teste</button>
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

export default connect(state => ({ module: state}))(Main)