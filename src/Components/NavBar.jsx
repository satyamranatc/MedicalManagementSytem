import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className='main-nav'>
        <h2 className='nav-logo'>HealthCare Plus</h2>
        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
    </nav>
  )
}