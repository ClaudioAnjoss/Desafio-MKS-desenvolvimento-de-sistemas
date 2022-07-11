import { useState } from 'react';
import { Provider } from 'react-redux';
import { Footer } from '../Footer';
import { Header } from '../Header';
import  Main  from '../Main';

import store from '../../store';
import './styles.css';

export function Layout() {

  return (
    <div className="container">
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  )
}
