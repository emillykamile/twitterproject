import error from './Error.module.css';

export function Error() {
  
    return (
        
    <section className={error.container}>
        <div className={error.boxContainer}>
            <header className={error.headerContainer}>
                <a href="#" className={error.linkError}>404 not found</a>
            </header>

            <main className={error.boxDescription}>

                <div className={error.boxImage}>
                    <img className={error.imageError} src="./src/assets/error.png" alt="Erro 404"></img>
                </div>

                <div className={error.description}>
                    <h1 className={error.titleDescription}>Desculpe, não conseguimos encontrar o que você pesquisou</h1>
                    <p className={error.paragraphDescription}>A página que você está procurando foi removida ou está
                        temporariamente indisponível.</p>
                    <a href="">
                        <button className={error.btnContainer}>
                            <img className={error.iconArrow} src="./src/assets/arrow.png" alt="seta"></img>
                            Voltar para a home
                        </button>
                    </a>
                    
                </div>
            </main>
        </div>
    </section>
)
}