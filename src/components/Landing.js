import { React, useState, useEffect } from 'react';
import styles from '../styles/Landing.module.css'
import s from '../styles/Banner.module.css'
import FlashingText from './FlashingText'
import CountDownTimer from './CountdownTimer/CountdownTimer'
import CarouselComponent from './CarouselComponent';
import BeigeBanner from './BeigeBanner';

function Landing() {
    return (
        <>  
        <div className={styles.Hero}>
            {/** <img src={hero} alt='Hero with lashes' />*/}
            <CarouselComponent />
            <div className={styles.Content}>
                <div>
                <FlashingText/>
                <CountDownTimer countdownTimestampMs={1700784000000}/>
                </div>            
            </div>
        </div>
        </>
    );
}

export default Landing;
