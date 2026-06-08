import React, { useState } from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/user/login',
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
          <h2>Welcome back</h2>
          <p>Sign in to your user account.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Your password" autocomplete="current-password" value={password} onChange={(e)=>setPassword(e.target.value)} />

          <div className="auth-actions">
            <button type="submit" className="btn btn-primary">Sign in</button>
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
