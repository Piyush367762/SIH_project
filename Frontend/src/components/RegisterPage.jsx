import React, { useState } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import './RegisterPage.css';

export default function RegisterPage() {
  // form state
  const [form, setForm] = useState({
    name: '',
    age:'',
    location:'',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // validation / error message
  const [error, setError] = useState('');

  // update form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // form submit “controller”
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // simple password match check
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // simulate API call
    console.log('Registering user:', form);
    // TODO: call your backend here, then redirect on success
  };

  return (
    <>
      <NavBar />

    <div className="register-wrapper glass-card " >
        <h1>Create Your Account</h1>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input 
            type="number"
            name="age"
            placeholder='Age'
            value={form.age}
            onChange={handleChange}
            required
          
          
          />
          <input
             type="text"
            name="location"
            placeholder='Location'
            value={form.location}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>

        <p className="switch-auth">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    <button type="submit" className="submit-btn">CREATE ACCOUNT</button>
    <div className="signin">
      Already have an account? <a href="/login">Sign in</a>
    </div>
 
      <Footer />
    </>
  );
}