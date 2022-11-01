import menuLateral from './Publicacoes.module.css';

export function Publicacoes(props) {

    console.log(props)

    return  (
        <div className={menuLateral.bordaCinza}>
            <div>
                <div className={menuLateral.darkThemeDiv}>
                    <h2 className={menuLateral.hDois}>Home</h2>
                    <a href=' '>
                        <img src='./src/assets/DarkThemeStar.png' className={menuLateral.darkTheme}></img>
                    </a>
                </div>
                <div className={menuLateral.marginNaProfile}>
                    <div className={menuLateral.profile}>
                        <div>
                            <img src='./src/assets/Imagem Profile.png' className={menuLateral.ProfileCircular}></img>
                        </div>
                        <div>
                            <textarea maxLength="300" minLength="1" placeholder="What's happening?"></textarea>
                        </div>
                    </div>
                    <div className={menuLateral.opcoesPublicar}>
                        <div>
                            <img src='./src/assets/SelecionarImagem.png'></img>
                            <img src='./src/assets/SelecionarGif.png'></img>
                            <img src='./src/assets/SelecionarPoll.png'></img>
                            <img src='./src/assets/SelecionarEmoji.png'></img>
                            <img src='./src/assets/SelecionarSchedule.png'></img>
                        </div>
                        <button type="submit" className={menuLateral.buttonTweetHome}>Tweet</button>
                    </div>
                </div>
            </div>
            <div className={menuLateral.containerOverflow}>
                <div className={menuLateral.containerPostIndividual}>
                    <div className={menuLateral.containerPerfilIndividual}>
                        <div>
                            <img src='./src/assets/Profile Picture.png' className={menuLateral.ProfileCircular}></img>
                        </div>
                            <h3 className={menuLateral.textProfilePost}>Devon Lane</h3>
                            <h4 className={menuLateral.textoAhobaProfile}>@johndue</h4>
                        <time title="31 de Outubro às 16:24" dateTime="2022-10-31 16:24:30">Publicado há 1h</time>
                    </div>
                    <p className={menuLateral.textoPublicado}>Tom is in a big hurry.</p>
                    <img src="./src/assets/UmImagemPublicacao.png" className={menuLateral.imgPost}></img>
                    <img src="./src/assets/Actions.png"></img>
                    <a href="../../erro404.html"><h3 className={menuLateral.show}>Show this thread</h3></a>
                </div>
                <div className={menuLateral.containerPostIndividual}>

                        <div className={menuLateral.containerPerfilIndividual}>
                            <div>
                                <img src='./src/assets/Profile Picture1.png' className={menuLateral.ProfileCircular}></img>
                            </div>
                                <h3 className={menuLateral.textProfilePost}>Darlene Robertson</h3>
                                <h4 className={menuLateral.textoAhobaProfile}>@darley</h4>
                            <time title="31 de Outubro às 16:24" dateTime="2022-10-31 16:24:30">Publicado há 1h</time>
                        </div >
                        <div>
                            <p className={menuLateral.textoPublicado}>Tom is in a big hurry.</p>
                        </div>

                    <img src="./src/assets/DoisImagemPublicacao.png" className={menuLateral.imgPost}></img>
                    <img src="./src/assets/Actions.png"></img>
                    <a href="../../erro404.html"><h3 className={menuLateral.show}>Show this thread</h3></a>
                </div>
                <div className={menuLateral.containerPostIndividual}>
                    <div className={menuLateral.containerPerfilIndividual}>
                        <div>
                            <img src='./src/assets/Profile Picture1.png' className={menuLateral.ProfileCircular}></img>
                        </div>
                        <h3 className={menuLateral.textProfilePost}>Eliana Silva</h3>
                        <h4 className={menuLateral.textoAhobaProfile}>@darley</h4>
                        <time title="31 de Outubro às 16:24" dateTime="2022-10-31 16:24:30">Publicado há 1h</time>
                    </div>
                    <p className={menuLateral.textoPublicado}>Tom is in a big hurry.</p>
                    <img src="./src/assets/TresImagemPublicacao.png" className={menuLateral.imgPost}></img>
                    <img src="./src/assets/Actions.png"></img>
                    <a href="../../erro404.html"><h3 className={menuLateral.show}>Show this thread</h3></a>
                </div>
                <div className={menuLateral.containerPostIndividual}>

                        <div className={menuLateral.containerPerfilIndividual}>
                            <div>
                                <img src='./src/assets/Profile Picture1.png' className={menuLateral.ProfileCircular}></img>
                            </div>
                                <h3 className={menuLateral.textProfilePost}>Darlene Robertson</h3>
                                <h4 className={menuLateral.textoAhobaProfile}>@darley</h4>
                            <time title="31 de Outubro às 16:24" dateTime="2022-10-31 16:24:30">Publicado há 1h</time>
                        </div >
                        <div>
                            <p className={menuLateral.textoPublicado}>Tom is in a big hurry.</p>
                        </div>

                    <img src="./src/assets/DoisImagemPublicacao.png" className={menuLateral.imgPost}></img>
                    <img src="./src/assets/Actions.png"></img>
                    <a href="../../erro404.html"><h3 className={menuLateral.show}>Show this thread</h3></a>
                </div>
                <div className={menuLateral.containerPostIndividual}>

                        <div className={menuLateral.containerPerfilIndividual}>
                            <div>
                                <img src='./src/assets/Profile Picture1.png' className={menuLateral.ProfileCircular}></img>
                            </div>
                                <h3 className={menuLateral.textProfilePost}>Darlene Robertson</h3>
                                <h4 className={menuLateral.textoAhobaProfile}>@darley</h4>
                            <time title="31 de Outubro às 16:24" dateTime="2022-10-31 16:24:30">Publicado há 1h</time>
                        </div >
                        <div>
                            <p className={menuLateral.textoPublicado}>Tom is in a big hurry.</p>
                        </div>

                    <img src="./src/assets/DoisImagemPublicacao.png" className={menuLateral.imgPost}></img>
                    <img src="./src/assets/Actions.png"></img>
                    <a href="../../erro404.html"><h3 className={menuLateral.show}>Show this thread</h3></a>
                </div>
                <div className={menuLateral.containerPostIndividual}>

                        <div className={menuLateral.containerPerfilIndividual}>
                            <div>
                                <img src='./src/assets/Profile Picture1.png' className={menuLateral.ProfileCircular}></img>
                            </div>
                                <h3 className={menuLateral.textProfilePost}>Darlene Robertson</h3>
                                <h4 className={menuLateral.textoAhobaProfile}>@darley</h4>
                            <time title="31 de Outubro às 16:24" dateTime="2022-10-31 16:24:30">Publicado há 1h</time>
                        </div >
                        <div>
                            <p className={menuLateral.textoPublicado}>Tom is in a big hurry.</p>
                        </div>

                    <img src="./src/assets/DoisImagemPublicacao.png" className={menuLateral.imgPost}></img>
                    <img src="./src/assets/Actions.png"></img>
                    <a href="../../erro404.html"><h3 className={menuLateral.show}>Show this thread</h3></a>
                </div>
            </div>
            
        </div>
    )
    
}