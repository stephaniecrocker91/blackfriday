import React from 'react';
import styles from '../styles/Landing.module.css'
import herovideo from '../videos/herovideo.mp4'

function Landing() {
    return (
        <>
        <div className={styles.Hero}>
            <div className={styles.overlay}></div>
            <video src={herovideo} autoPlay loop muted />
            <div className={styles.Content}>
                <h2>Up to <strong>70% off</strong></h2>
                <div></div>
                    <h3>London <strong>Lash</strong> </h3>
                    <h1>Black Friday <strong>Sales</strong></h1>            
                <h2>Are almost here...</h2>
                <p>Lash Out on Savings: Up to <strong>70% Off</strong> Beauty Products this Black Friday!</p>
            </div>
        </div>
        </>
    );
}

export default Landing;
