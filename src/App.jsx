import { Footer } from "./components/Footer.jsx";
import { MenuLateral } from "./components/MenuLateral.jsx";
import { Publicacoes } from "./components/Publicacoes.jsx";

import stylesapp from './components/App.module.css';


import './global.css'
import { BarraLateral } from "./components/BarraLateral.jsx";

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://www.linkedin.com/in/emillykamile/',
      name: 'Emilly Kamile',
      role: 'Desenvolvedora FrontEnd'
    },
  content: [
    { type: 'paragraph', content:  "Tom is in a big hurry"},
    { type: 'image', content:  "/DoisImagemPublicacao"},
    { type: 'image', content:  "/Actions"},
    { type: 'link', content:  "Show this thread"},
  ],
  publishedAt: new Date('2022-05-05 07:15:00'),
  },
];

export function App() {

  return (
    <div>
      <section className={stylesapp.containerSection}>
          <MenuLateral />
          <main className={stylesapp.main}>
            <div>
              <Publicacoes />
            </div>
          </main>
          <BarraLateral />
      </section>
      <Footer />
    </div>
  )
}
