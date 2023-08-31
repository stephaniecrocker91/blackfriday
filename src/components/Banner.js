import React from "react";
import styles from '../styles/Banner.module.css'

function Banner() {
    return (
        <>
        <p className={styles.Banner}>Unlock <strong><a href='#'>VIP Access</a></strong>  to Exclusive Deals Before Anyone Else! <i class="fa-regular fa-gem"></i></p>
        </>
    );
}

export default Banner;