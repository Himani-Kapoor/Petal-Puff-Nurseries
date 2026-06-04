import React from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Welcome back</h2>
          <p>Sign in to your user account.</p>
        </header>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Your password" />

          <div className="auth-actions">
            <button type="button" className="btn btn-primary">Sign in</button>
            <Link to="/user/register" className="btn btn-ghost">Create account</Link>
          </div>
        </form>

        <div className="auth-footer">
          <a className="link" href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
