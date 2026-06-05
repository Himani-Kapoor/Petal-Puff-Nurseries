import React, { useState } from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

const UserRegister = () => {
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [stateVal, setStateVal] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ fullname, username, email, phoneNumber, street, city, stateVal, zipCode, country, password })
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Create your account</h2>
          <p>Sign up as a user to start exploring.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full name</label>
          <input id="fullname" name="fullname" placeholder="Jane Doe" value={fullname} onChange={(e)=>setFullname(e.target.value)} />

          <label htmlFor="username">Username</label>
          <input id="username" name="username" placeholder="janedoe" value={username} onChange={(e)=>setUsername(e.target.value)} />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <label htmlFor="phoneNumber">Phone number</label>
          <input id="phoneNumber" name="phoneNumber" placeholder="e.g. +91 98765 43210" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />

          <label htmlFor="street">Street</label>
          <input id="street" name="street" placeholder="Street address" value={street} onChange={(e)=>setStreet(e.target.value)} />

          <label htmlFor="city">City</label>
          <input id="city" name="city" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} />

          <label htmlFor="state">State</label>
          <input id="state" name="state" placeholder="State" value={stateVal} onChange={(e)=>setStateVal(e.target.value)} />

          <label htmlFor="zipCode">Zip code</label>
          <input id="zipCode" name="zipCode" placeholder="Zip code" value={zipCode} onChange={(e)=>setZipCode(e.target.value)} />

          <label htmlFor="country">Country</label>
          <input id="country" name="country" placeholder="Country (default: India)" value={country} onChange={(e)=>setCountry(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Choose a password" value={password} onChange={(e)=>setPassword(e.target.value)} />

          <div className="auth-actions">
            <button type="submit" className="btn btn-primary">Create account</button>
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
