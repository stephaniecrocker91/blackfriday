import React from 'react'
import styles from '../styles/VideoPlayer.module.css'

const VideoPlayer = ({src}) => {
    return (
        <video className={styles.VideoPlayer} src={src} autoPlay loop muted />
    )
}

export default VideoPlayer