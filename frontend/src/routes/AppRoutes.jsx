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
      
    </div>
    </>
  )
}

export default AppRoutes
