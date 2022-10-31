import menuLateral from './Publicacoes.module.css';

export function Publicacoes() {

    return  (
        <div className={menuLateral.bordaCinza}>
            <div>
                <div className={menuLateral.darkThemeDiv}>
                    <h2 className={menuLateral.hDois}>Home</h2>
                    <img src='./src/assets/DarkThemeStar.png' className={menuLateral.darkTheme}></img>
                </div>
                <div className={menuLateral.marginNaProfile}>
                    <div className={menuLateral.profile}>
                        <div>
                            <img src='./src/assets/ImagemProfile.png'></img>
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
                        <button className={menuLateral.buttonTweetHome}>Tweet</button>
                    </div>
                </div>
            </div>
            <div className={menuLateral.containerPostIndividual}>
                <img src="./src/assets/UmImagemPublicacao.png" className={menuLateral.imgPost}></img>
                <img src="./src/assets/Actions.png"></img>
                <a href=""><h3 className={menuLateral.show}>Show this thread</h3></a>
            </div>
            <div className={menuLateral.containerPostIndividual}>
                <img src="./src/assets/DoisImagemPublicacao.png" className={menuLateral.imgPost}></img>
                <img src="./src/assets/Actions.png"></img>
                <a href=""><h3 className={menuLateral.show}>Show this thread</h3></a>
            </div>
            <div className={menuLateral.containerPostIndividual}>
                <img src="./src/assets/TresImagemPublicacao.png" className={menuLateral.imgPost}></img>
                <img src="./src/assets/Actions.png"></img>
                <a href=""><h3 className={menuLateral.show}>Show this thread</h3></a>
            </div>
        </div>
    )
    
}