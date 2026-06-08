import React, { useState } from 'react'
import '../styles/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const NurseryOwnerLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/nursery-owner/login',
        { email, password },
        { withCredentials: true }
      )
      // save basic account info to localStorage
      if (response.data && response.data.account) {
        localStorage.setItem('nurseryOwner', JSON.stringify(response.data.account))
      }
      setLoading(false)
      // redirect to home or owner dashboard (adjust if you have a dashboard route)
      navigate('/')
    } catch (err) {
      setLoading(false)
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError(err.message || 'Login failed')
      }
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Partner login</h2>
          <p>Sign in to manage your Nursery Owner profile.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error">{error}</div>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="owner@business.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="auth-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
            <Link to="/nursery-owner/register" className="btn btn-ghost">
              Create account
            </Link>
          </div>
        </form>

        <div className="auth-footer">
          <a className="link" href="#">Need help logging in?</a>
        </div>
      </div>
    </div>
  )
}

export default NurseryOwnerLogin
