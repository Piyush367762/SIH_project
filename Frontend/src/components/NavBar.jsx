import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Pic</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-it-works">How it works</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/scholarships">Scholarships</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/">Language</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
}