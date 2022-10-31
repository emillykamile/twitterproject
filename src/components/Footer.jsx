
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
                        <button type="submit">Login in</button>
                    </div>
                    <div className={styles.logout}>
                        <button type="submit">Sign up</button>
                    </div>
                </div>
            </div>
        </section>
       
    )

}