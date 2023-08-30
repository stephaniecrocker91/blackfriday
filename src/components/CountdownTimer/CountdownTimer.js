import styles from '../../styles/CountdownTimer.module.css'
import { useState, useEffect } from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days:'00',
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    
useEffect(() => {
    const intervalId = setInterval(() => {
        updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
},[countdownTimestampMs]);

    function updateRemainingTime(countDown){
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countDown));
    }

    return(
        <div className={styles.Timer}>
            <div className = {styles.countdown}>
                <span>{remainingTime.days}</span>
                <span>days</span>
                <span className={styles.twonumbers}>{remainingTime.hours}</span>
                <span>hours</span>
                <span className={styles.twonumbers}>{remainingTime.minutes}</span>
                <span>minutes</span>
                <span className={styles.twonumbers}>{remainingTime.seconds}</span>
                <span>seconds</span>
            </div>
        </div>
    );
}

export default CountdownTimer