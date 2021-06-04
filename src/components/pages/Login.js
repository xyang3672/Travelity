import React from 'react'
import "./Login.scss";
import loginImg from "../../login.jpg";

function Login(props) {
  return (
    <div className="base-container" ref={props.containerRef}>
      <video src='/videos/background.mp4' autoPlay loop muted />
    
    <div className="content">
      <div className="image">
        <img src={loginImg} alt='img' />
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Login
        </button>
      </div>
    </div>
    
  </div>
  )
}

export default Login
