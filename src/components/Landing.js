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
                <h2 className={styles.Landing}>Up to <strong>70% off</strong></h2>
                <h1 className={styles.Landing}>Black Friday <strong>Sale</strong></h1>
                <h2 className={styles.Landing}>Is almost here...</h2>
                <p>Lash Out on Savings: Up to <strong>70% Off</strong> Beauty Products this Black Friday!</p>
            </div>
        </div>
        </>
    );
}

export default Landing;
