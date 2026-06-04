import React from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

const UserRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Create your account</h2>
          <p>Sign up as a user to start exploring.</p>
        </header>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" placeholder="Jane Doe" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Choose a password" />

          <div className="auth-actions">
            <button type="button" className="btn btn-primary">Create account</button>
            <Link to="/user/login" className="btn btn-ghost">Login</Link>
          </div>
        </form>

        <div className="auth-footer">
          By creating an account you agree to our <a className="link" href="#">terms</a>.
        </div>
      </div>
    </div>
  )
}

export default UserRegister
