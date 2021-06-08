import React from 'react'
import './Video.css';
import { Link } from 'react-router-dom';

function Video() {
    return (
        <div className='video-container'>
            <video src='/videos/background.mp4' autoPlay loop muted />
            <h1>Discover Your Dream Trip</h1>
            <p>share your journey</p>
            <Link to="/map"><button className='start-btn'>Start</button></Link>
        </div>
        
    )
}

export default Video
