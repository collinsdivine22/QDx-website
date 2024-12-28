import React from 'react'
import { FaHome, FaUserPlus, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa';
function LearningSide() {
  return (
    <div>
   <nav className="nav flex-column bg-light p-3" style={{ width: '250px', height: '100vh' }}>
          <a className="nav-link" href="PatientRegistration">
            <b><FaUserPlus className="me-2" />Register</b>
          </a>
          <a className="nav-link active" aria-current="page" href="layout">
            <b><FaHome className="me-2" />Home</b>
          </a>
          <a className="nav-link" href="About">
            <b><FaInfoCircle className="me-2" />About</b>
          </a>
          <a className="nav-link" href="Service">
            <b><FaConciergeBell className="me-2" />Services</b>
          </a>
          <a className="nav-link" href="/">
            <b><FaEnvelope className="me-2" />Contact</b>
          </a>
        </nav>
    </div>
  )
}

export default LearningSide
