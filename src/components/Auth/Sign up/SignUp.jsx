import React, { useState } from 'react'
import './SignUp.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form validation and submission logic will go here
    console.log('Sign Up Data:', formData)
  }

  return (
    <div className="neo-signup-container">
      <div className="neo-signup-graphic"></div>
      
      <form onSubmit={handleSubmit} className="neo-signup-form">
        <h1 className="neo-signup-title">JOIN THE <span>LEARNIO ARMY</span></h1>
        <p className="neo-signup-subtitle">10,000+ students already crushing their exams</p>
        
        <div className="neo-input-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="neo-input"
            required
          />
          <div className="neo-input-underline"></div>
        </div>

        <div className="neo-input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="neo-input"
            required
          />
          <div className="neo-input-underline"></div>
        </div>

        <div className="neo-input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="neo-input"
            required
          />
          <div className="neo-input-underline"></div>
        </div>

        <div className="neo-input-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="neo-input"
            required
          />
          <div className="neo-input-underline"></div>
        </div>

        <button type="submit" className="neo-signup-button">
          CREATE ACCOUNT <span className="neo-arrow">→</span>
        </button>

        <p className="neo-signup-login">
          Already have an account? <a href="/login" className="neo-link">Log In</a>
        </p>
      </form>
    </div>
  )
}

export default SignUp