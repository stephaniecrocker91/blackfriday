import React from "react";
import styles from '../styles/Banner.module.css'

function BlackBanner(props) {
    return (
        <>
        <p className={styles.Banner}>{props.message}</p>
        </>
    );
}

export default BlackBanner;