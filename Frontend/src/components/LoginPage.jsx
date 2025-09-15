import React from 'react';
import './LoginPage.css';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import webImage from './assets/webImage.png'; // if LoginPage.jsx is in src/ 
export default function LoginPage() {
  return (
    <div className="page-container">
      <NavBar />
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
    <Footer />
      </div>
      
  );
}
//git add .
//git commit -m 'message' 
//git push origin main
