import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import UserRegister from '../pages/UserRegister'
import UserLogin from '../pages/UserLogin'
import NurseryOwnerRegister from '../pages/NurseryOwnerRegister'
import NurseryOwnerLogin from '../pages/NurseryOwnerLogin'


const AppRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/user/register" element={<UserRegister/>}/>
            <Route path="/user/login" element={<UserLogin/>}/>
            <Route path="/nursery-owner/register" element={<NurseryOwnerRegister/>}/>
            <Route path="/nursery-owner/login" element={<NurseryOwnerLogin/>}/>

          



        </Routes>
      
    </Router>
    <marquee behavior="" direction=""><h1>hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</h1></marquee>


    <div>
      <a href="http://localhost:5173/nursery-Owner/register">Register</a><br />
      <a href="http://localhost:5173/nursery-Owner/login">Login</a><br/>
      <a href="http://localhost:5173/user/register">Register</a><br />
      <a href="http://localhost:5173/user/login">Login</a>
    </div>
    </>
  )
}

export default AppRoutes
