
import styles from './Footer.module.css';

export function Footer() {

    return (

        <section className={styles.rodape}>
            <div className={styles.container}>
                <div>
                    <h2>
                        Don't miss what's happening
                    </h2>
                    <p>
                        People on Twitter are the first to know.
                    </p>
                </div>
        
                <div className={styles.buttons}>
                    <div className={styles.login}>
                        <a href='../../erro404.html'>
                            <button type="submit" className={styles.loginButton}>Login in</button>
                        </a>
                    </div>
                    <div className={styles.logout}>
                        <a href='../../erro404.html'>
                            <button type="submit" className={styles.signUp}>Sign up</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
       
    )

}