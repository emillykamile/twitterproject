
import barralateral from './BarraLateral.module.css';

export function BarraLateral() {
    return (
        <div>
            <aside className={barralateral.sidebar}>
                <div className={barralateral.search}>
                    <img src="./src/assets/SearchLupa.png"></img>
                    <p>Search Twitter</p>
                </div>
                <div>
                    <div>
                        <h2>What’s happening</h2>
                    </div>
                    <div className={barralateral.noticiasSearch}>
                        
                        <div>
                            <p>COVID19</p>
                            <p>- Last night</p>
                            
                            <p>
                                England’s Chief Medical Officer 
                                says the UK is at the most 
                                dangerous time of the pandemic
                            </p>
                            
                            
                            <p>
                                Trending with
                            </p>
                            <p>#covid29</p>
                        </div>
                        
                        <div>
                            <img src='./src/assets/Thumbnail.png'></img>
                        </div>
                            
                       
                    </div>
                </div>
            </aside>
        </div>
    )
}