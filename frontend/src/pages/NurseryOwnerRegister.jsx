import React, { useEffect, useState } from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

const NurseryOwnerRegister = () => {

  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    axios.post('http://localhost:5000/api/auth/nursery-owner/register', {
      ownerName,
      email,
      phoneNumber,
      address,
      password
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: perform registration action
    console.log({ ownerName, email, phoneNumber, address, password })
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
          <input id="name" name="name" placeholder="Owner full name" value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} />

          {/* <label htmlFor="business">Business name</label>
          <input id="business" name="business" placeholder="Your business name" /> */}

          <label htmlFor="email">Contact email</label>
          <input id="email" name="email" type="email" placeholder="contact@business.com" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <label htmlFor="phoneNumber">Phone number</label>
          <input id="phoneNumber" name="phoneNumber" placeholder="e.g. +91 98765 43210" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />

          <label htmlFor="address">Address</label>
          <input id="address" name="address" placeholder="Street, City, State, Zip" value={address} onChange={(e)=>setAddress(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="Choose a secure password" value={password} onChange={(e)=>setPassword(e.target.value)} />

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
