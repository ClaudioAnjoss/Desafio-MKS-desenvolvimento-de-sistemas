import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { Aside } from '../Aside';

import './styles.css';

export function Layout() {

  return (
    <div className="container">
        <Header />
        <Main />
        <Footer />
        <Aside />
    </div>
  )
}
