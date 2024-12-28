import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LineChart from './LineChart';
import { FaHome, FaUserPlus, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa';

function Layout() {
  return (
    <div>
      <h1 className="text-primary text-center bg-light py-3 shadow">
        QDx Diagnostic Center
      </h1>

      {/* Main Container with Sidebar and Content */}
      <div className="d-flex">
        {/* Sidebar */}
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

        {/* Centered Card with LineChart */}
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <div className="card p-4" style={{ width: '600px' }}>
            <div className="card-body">
              <h5 className="card-title">Sales Over Time</h5>
              <LineChart />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-primary text-center bg-light py-3 shadow">Welcome to QDx</h2>
    </div>
  );
}

export default Layout;
