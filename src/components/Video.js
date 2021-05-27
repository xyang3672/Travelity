import React from 'react'
import './Video.css';

function Video() {
    return (
        <div className='video-container'>
            <video src='/videos/background.mp4' autoPlay loop muted />
        </div>
    )
}

export default Video
