import { React, useState, useEffect } from 'react';
import styles from '../styles/Landing.module.css'
import s from '../styles/Banner.module.css'
import FlashingText from './FlashingText'
import CountDownTimer from './CountdownTimer/CountdownTimer'
import CarouselComponent from './CarouselComponent';

function Landing() {
    return (
        <>  
        <div className={styles.Hero}>
            <div className={styles.overlay}></div>
            {/** <img src={hero} alt='Hero with lashes' />*/}
            <CarouselComponent />
            <div className={styles.Content}>
                <div>
                <FlashingText/>
                <CountDownTimer countdownTimestampMs={1700784000000}/>
                </div>            
            </div>
        </div>
            <CountDownTimer countdownTimestampMs={1700784000000}/>
            <p className={s.Banner} >Lash Out on Savings: Up to <strong>70% Off</strong> Beauty Products this Black Friday!</p>
        </>
    );
}

export default Landing;
