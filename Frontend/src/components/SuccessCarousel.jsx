import React, { useState, useEffect } from 'react';
import './SuccessCarousel.css';

const stories = [
  {
    title: 'IAS Topper',
    name: 'Ananya Sharma',
    quote: 'Consistent practice and mock quizzes helped me crack UPSC.',
    domain: 'IAS',
  },
  {
    title: 'Engineering Gold Medalist',
    name: 'Ravi Mehta',
    quote: 'Solving daily quizzes sharpened my problem-solving skills.',
    domain: 'Engineering',
  },
  {
    title: 'Doctor & NEET Ranker',
    name: 'Dr. Priya Verma',
    quote: 'Focused revision and quiz tracking made all the difference.',
    domain: 'Medical',
  },
];

export default function SuccessCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % stories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const story = stories[index];

  return (
    <div className="carousel-card">
      <h3>{story.title}</h3>
      <p className="quote">“{story.quote}”</p>
      <p className="author">— {story.name}, {story.domain}</p>
    </div>
  );
}