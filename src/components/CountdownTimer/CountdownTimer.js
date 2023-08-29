import styles from '../../styles/CountdownTimer.module.css'


const CountdownTimer = () => {
    return(
        <div className={styles.Timer}>
            <div className = {styles.countdown}>
                <span>30</span>
                <span>days</span>
                <span>12</span>
                <span>hours</span>
                <span>4</span>
                <span>minutes</span>
                <span>32</span>
                <span>seconds</span>
            </div>
        </div>
    );
}

export default CountdownTimer