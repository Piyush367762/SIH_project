import React from 'react';
import './LoginPage.css';
import webImage from './assets/webImage.png'; // if LoginPage.jsx is in src/ 
export default function LoginPage() {
  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="logo">Pic</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/how-it-works">How it works</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/scholarships">Scholarships</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/">Language</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/login">Log In</a></li>
        </ul>
      </nav>
      <div className="web">
         <img class="web_image" src={webImage} alt="Web Image" />
         <div className="login-wrapper">
       
        <h1>Welcome!</h1>
        <p>One Step Personalized Guidance</p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>
      </div>
    </div>
      </div>
      
  );
}