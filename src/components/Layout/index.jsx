
import { useState } from 'react';
import { Aside } from '../Aside';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';
import MyContext from '../../contexts/myContent';

import './styles.css';

function Layout(props) {
  //declaração dos states
  const [products, setProducts] = useState(false);
  const [productsCart, setProductsCart] = useState([]);
  const [isActive, setActive] = useState(false);

  return (
    <MyContext.Provider value={{ productsCart, setProductsCart, isActive, setActive, products, setProducts }}>
      <div className="container">
        <Header />
        <Main />
        <Footer />
        <Aside />
      </div>
    </MyContext.Provider>
  )
}
export default (Layout)
