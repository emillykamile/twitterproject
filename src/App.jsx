import { Footer } from "./components/Footer.jsx";
import { MenuLateral } from "./components/MenuLateral.jsx";
import { Publicacoes } from "./components/Publicacoes.jsx";

import './global.css'


export function App() {

  return (
    <div>
      <section className="containerSection">
        <MenuLateral />
        <Publicacoes />
      </section>
      <Footer />
    </div>
  )
}
