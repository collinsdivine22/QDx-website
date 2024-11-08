// Layout.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LineChart from './LineChart';

function Layout() {
  return (
    <div>
      <h1 className="text-center text-primary">QDx Diagnostic Center</h1>

      {/* Main Container with Sidebar and Content */}
      <div className="d-flex">
        {/* Sidebar */}
        <nav className="nav flex-column bg-light p-3" style={{ width: '250px', height: '100vh' }}>
        <a className="nav-link" href="PatientRegistration"><b>Register</b></a>
          <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
          <a className="nav-link" href="/"><b>About</b></a>
          <a className="nav-link" href="/"><b>Services</b></a>
          <a className="nav-link" href="/"><b>Contact</b></a>
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

      <h2 className="text-primary text-center mt-4">Welcome to QDx</h2>
    </div>
  );
}

export default Layout;
