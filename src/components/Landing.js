import { React, useState, useEffect } from 'react';
import styles from '../styles/Landing.module.css'
import s from '../styles/Banner.module.css'
import hero from '../images/hero.png'
import FlashingText from './FlashingText'
import CountDownTimer from './CountdownTimer/CountdownTimer'


function Landing() {
    return (
        <>  
        <div className={styles.Hero}>
            <div className={styles.overlay}></div>
            <img src={hero} alt='Hero with lashes' />
            <div className={styles.Content}>
                <div>
                <FlashingText/>
                </div>            
            </div>
        </div>
            <CountDownTimer countdownTimestampMs={1700784000000}/>
            <p className={s.Banner} >Lash Out on Savings: Up to <strong>70% Off</strong> Beauty Products this Black Friday!</p>
        </>
    );
}

export default Landing;
