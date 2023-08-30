import React from 'react';
import styles from '../styles/Landing.module.css'
import herovideo from '../videos/herovideo.mp4'
import logo from '../images/logo.png'


function Landing() {
    return (
        <>
        <p>Unlock <strong>VIP Access</strong>  to Exclusive Deals Before Anyone Else!</p>
        <img src={logo} alt="Girl in a jacket" className={styles.Logo}  />      
        <div className={styles.Hero}>
            <div className={styles.overlay}></div>
            <video src={herovideo} autoPlay loop muted />
            <div className={styles.Content}>
                <h2>Up to <strong>70% off</strong></h2>
                    <h1>Black Friday <strong>Sales</strong></h1>            
                <h2>Are almost here...</h2>
            </div>
        </div>
            <p>Lash Out on Savings: Up to <strong>70% Off</strong> Beauty Products this Black Friday!</p>

        </>
    );
}

export default Landing;
