import { React, useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css'
import hero from '../images/hero.png'



function Hero() {
    return (
        <>
        <div class={styles.content}></div>
        <div class={styles.FadeAway}></div>
        </>
    );
}

export default Hero;
