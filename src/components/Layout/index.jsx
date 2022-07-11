
import { useState } from 'react';
import MyContext from '../../contexts/myContent';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

import './styles.css';

function Layout(props) {
  //declaração dos states
  const [productsCart, setProductsCart] = useState('')

  return (
    <MyContext.Provider value={{productsCart, setProductsCart, }}>
      
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
    </MyContext.Provider>
  )
}
export default (Layout)
