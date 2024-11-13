import React from "react";
import './navigation.css';
import logo from '../../img/logo/stellar_fit.jpg'

const Navigation = () => {
  return (
    <>
      <div className="top-bar">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
        </div>
        <div className="auth-links">
          <a href="/login">Login</a> <span className="line-icon"> |</span> <a href="/signup">Sign Up</a>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo"><img className="logo-img" src={logo} alt="Logo" /></div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/chat">Chat</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;