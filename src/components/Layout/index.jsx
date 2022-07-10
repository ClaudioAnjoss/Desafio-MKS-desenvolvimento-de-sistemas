import { useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

import './styles.css';

export function Layout() {

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
