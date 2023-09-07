import React from "react";
import styles from '../styles/BeigeBanner.module.css'
import s from '../styles/Banner.module.css'

function BeigeBanner() {
    return (
        <>
        <p className={styles.BeigeBanner}>Lash Out on Savings: Up to <strong>70%</strong> Off Beauty Products this Black Friday! </p>
        <p className={s.Banner} >Don't Just Follow Trends – <strong>Set Them</strong> with Exclusive Member Deals!</p>
        </>
    );
}

export default BeigeBanner;