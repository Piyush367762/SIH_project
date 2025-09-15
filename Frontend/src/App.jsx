import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';
//import ScholarshipPage from './components/Schlorship.jsx';
import Dashboard from './components/Dashboard.jsx';
export default function App() {
  return (
    <Routes>
      {/* Default path redirects to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Registration page */}
      <Route path="/signup" element={<RegisterPage />} />
     

      <Route path='/dashboard' element={<Dashboard />} />
      {/* Fallback for unknown URLs */}
      <Route path="*" element={<p>404: Page not found</p>} />
    </Routes>
    
  );
}