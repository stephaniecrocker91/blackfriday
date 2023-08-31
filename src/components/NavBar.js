import React from "react";
import styles from '../styles/NavBar.module.css'
import logo from '../images/logo.png'

function NavBar() {
    return (
        <>
            <img src={logo} alt="London Lash Logo" className={styles.Logo}  />    
        </>
    );
}

export default NavBar;