import React, { useState } from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NurseryOwnerRegister = () => {
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: ownerName,
      email,
      password,
      phoneNumber,
      address,
    }

    try {
      const response = await axios.post('/api/auth/nursery-owner/register', data, { withCredentials: true })
      console.log('Success:', response.data)
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error('The requested endpoint was not found (404). Check your URL.')
      } else {
        console.error('An error occurred:', error.message)
      }
    }
  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-header">
          <h2>Partner sign up</h2>
          <p>Create an account for your Nursery Owner business.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" placeholder="Owner full name" autocomplete="name" value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} />

          {/* <label htmlFor="business">Business name</label>
          <input id="business" name="business" placeholder="Your business name" /> */}

          <label htmlFor="email">Contact email</label>
          <input id="email" name="email" type="email" placeholder="contact@business.com" autocomplete="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Choose a secure password" autocomplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)} />

          <label htmlFor="phoneNumber">Phone number</label>
          <input id="phoneNumber" name="phoneNumber" placeholder="e.g. +91 98765 43210" autocomplete="tel" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />

          <label htmlFor="address">Address</label>
          <input id="address" name="address" placeholder="Street, City, State, Zip" autocomplete="street-address" value={address} onChange={(e)=>setAddress(e.target.value)} />

          
          <div className="auth-actions">
            <button type="submit" className="btn btn-primary">Create account</button>
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
