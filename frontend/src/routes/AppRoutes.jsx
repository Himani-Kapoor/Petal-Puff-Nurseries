import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/user/register" element={<h1>User Register</h1>}/>
            <Route path="/user/login" element={<h1>UserLogin</h1>}/>
            <Route path="/nursery-owner/register" element={<h1>Nursery Owner Register</h1>}/>
            <Route path="/nursery-owner/login" element={<h1>Nursery Owner Login</h1>}/>





        </Routes>
      
    </Router>
  )
}

export default AppRoutes
