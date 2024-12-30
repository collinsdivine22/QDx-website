import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink } from 'react-router-dom';
import { FaHome, FaUserPlus, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa';

function Layout() {
  return (
    <div>
      <h1 className="text-primary text-center bg-light py-3 shadow">QDx Diagnostic Center</h1>

      {/* Main container with Sidebar and Page Content */}
      <div className="d-flex">
        {/* Sidebar */}
        <nav className="nav flex-column bg-light p-3" style={{ width: '250px', height: '100vh' }}>
          <NavLink className="nav-link" to="/PatientRegistration">
            <b><FaUserPlus className="me-2" />Register</b>
          </NavLink>
          <NavLink className="nav-link" to="/layout">
            <b><FaHome className="me-2" />Home</b>
          </NavLink>
          <NavLink className="nav-link" to="/about">
            <b><FaInfoCircle className="me-2" />About</b>
          </NavLink>
          <NavLink className="nav-link" to="/service">
            <b><FaConciergeBell className="me-2" />Services</b>
          </NavLink>
          <NavLink className="nav-link" to="/">
            <b><FaEnvelope className="me-2" />Contact</b>
          </NavLink>
        </nav>

        {/* Dynamic Page Content */}
        <div className="flex-grow-1 p-3">
          <Outlet /> {/* This is where the content of the current page will appear */}
        </div>
      </div>
    </div>
  );
}

export default Layout;
