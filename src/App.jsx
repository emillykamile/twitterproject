import { Footer } from "./components/Footer.jsx";
import { MenuLateral } from "./components/MenuLateral.jsx";
import { Publicacoes } from "./components/Publicacoes.jsx";

import stylesapp from './components/App.module.css';


import './global.css'
import { BarraLateral } from "./components/BarraLateral.jsx";


export function App() {

  return (
    <div>
      <section className={stylesapp.containerSection}>
          <MenuLateral />
          <main className={stylesapp.main}>
            <Publicacoes />
          </main>
          <BarraLateral />
      </section>
      <Footer />
    </div>
  )
}
