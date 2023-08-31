import { useRef, React } from 'react';
import styles from '../styles/Landing.module.css'
import s from '../styles/Banner.module.css'
import hero from '../images/hero.png'

function Landing() {
    return (
        <>  
        <div className={styles.Hero}>
            <div className={styles.overlay}></div>
            <img src={hero} alt='Hero with lashes' />
            <div className={styles.Content}>
                <div>
                <h1>Black Friday <strong>Sales</strong></h1>
                <h2>Are almost here...</h2>
                </div>            
            </div>
        </div>

            <p className={s.Banner} >Lash Out on Savings: Up to <strong>70% Off</strong> Beauty Products this Black Friday!</p>

        </>
    );
}

export default Landing;
