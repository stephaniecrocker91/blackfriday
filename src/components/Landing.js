import { React, useState, useEffect } from 'react';
import styles from '../styles/Landing.module.css'
import s from '../styles/Banner.module.css'
import hero from '../images/hero.png'


let defaultColor = "white"
let num = 0

function Landing() {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(()=> {
            /* Created every second */
            updateColor(defaultColor);
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

    function updateColor(color) {
        console.log("Hello, World!")
        num+= 1
        console.log(num)
        if(color = "white"){
            let defaultColor= "black";
        } else {
            let defaultColor="white";
        }
        console.log(defaultColor);
    };



    return (
        <>  
        <div className={styles.Hero}>
            <div className={styles.overlay}></div>
            <img src={hero} alt='Hero with lashes' />
            <div className={styles.Content}>
                <div>
                <h1 style={{ color:[defaultColor] }}>Black Friday <strong>Sales</strong></h1>
                <h2>Are almost here...</h2>
                </div>            
            </div>
        </div>
            <p className={s.Banner} >Lash Out on Savings: Up to <strong>70% Off</strong> Beauty Products this Black Friday!</p>
        </>
    );
}

export default Landing;
