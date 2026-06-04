import React from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

const NurseryOwnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Partner sign up</h2>
          <p>Create an account for your Nursery Owner business.</p>
        </header>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="business">Business name</label>
          <input id="business" name="business" placeholder="Your business name" />

          <label htmlFor="contact">Contact email</label>
          <input id="contact" name="contact" type="email" placeholder="contact@business.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Choose a secure password" />

          <div className="auth-actions">
            <button type="button" className="btn btn-primary">Create account</button>
            <Link to="/nursery-owner/login" className="btn btn-ghost">Login</Link>
          </div>
        </form>

        <div className="auth-footer">
          You can manage your listings from the dashboard after signup.
        </div>
      </div>
    </div>
  )
}

export default NurseryOwnerRegister
