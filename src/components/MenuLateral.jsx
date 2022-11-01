import menuLateral from './MenuLateral.module.css';

export function MenuLateral() {

    return (
        <div  className={menuLateral.container}>
          <div>
            <div>
              <img src="./src/assets/LogoTwitter.svg" alt="Logo do Twitter" width="25" height="50"></img>
            </div>
            <div>
              <div className={menuLateral.home}>
                <img src="./src/assets/Home.png" alt="Icon Home" width="25" height="25"></img>
                <a href='http://127.0.0.1:5173/'> 
                  <h3> Home </h3>
                </a>
              </div>
              <div className={menuLateral.explorer}>
                <img src="./src/assets/Explore.png" alt="Icon Explorer" width="25" height="25"></img>
                <a href='../../erro404.html'> 
                  <h3>
                    Explorer
                  </h3>
                </a>
              </div>
              <div className={menuLateral.notifications}>
                <img src="./src/assets/Notifications.png" alt="Icon Notifications" width="25" height="25"></img>
                <a href='../../erro404.html'> 
                  <h3>
                    Notifications
                  </h3>
                </a>
              </div>
              <div className={menuLateral.messages}>
                <img src="./src/assets/Messages.png" alt="Icon Messages" width="25" height="25"></img>
                <a href='../../erro404.html'> 
                  <h3>
                    Messages
                  </h3>
                </a>
              </div>
              <div className={menuLateral.bookmarks}>
                <img src="./src/assets/Bookmarks.png" alt="Icon Bookmarks" width="25" height="25"></img>
                <a href='../../erro404.html'> 
                  <h3>
                    Bookmarks
                  </h3>
                </a>
              </div>
              <div className={menuLateral.lists}>
                <img src="./src/assets/Lists.png" alt="Icon Lists" width="25" height="25"></img>
                <a href='../../erro404.html'> 
                  <h3>
                    Lists
                  </h3>
                </a>
              </div>
              <div className={menuLateral.profile}>
                
                  <img src="./src/assets/Profile.png" alt="Icon Profile" width="25" height="25"></img>
                <a href='../../erro404.html'> 
                  <h3>
                    Profile
                  </h3>
                </a>
                
              </div>
              <div className={menuLateral.more}>
                <img src="./src/assets/More.png" alt="Icon More" width="25" height="25"></img>
                <a href='../../erro404.html'> 
                  <h3>
                    More
                  </h3>
                </a>
              </div>
              <div>
                <a href='../../erro404.html'>
                  <button className={menuLateral.buttonTweet}>Tweet</button>
                </a>
              </div>
            </div>
          </div>
      </div>
    )
}