import React from 'react';
import './Dashboard.css';
import SuccessCarousel from './SuccessCarousel';
import NavBar from './NavBar';
import Footer from './Footer';
export default function Dashboard() {
  const quizProgress = 65; // Example: 65% completed

  return (
    
    <div className="dashboard-container">
      <NavBar />
      <h1>Welcome to Your Learning Dashboard</h1>

      <div className="quiz-section">
        <h2>Quiz Progress</h2>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${quizProgress}%` }}
          >
            {quizProgress}%
          </div>
        </div>
        <button className="quiz-btn">Take a Quiz</button>
      </div>

      <div className="carousel-section">
        <h2>Success Stories</h2>
        <SuccessCarousel />
      </div>
      <Footer />
    </div>
  );
}
