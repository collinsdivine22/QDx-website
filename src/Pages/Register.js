// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login validation logic here if necessary

    // Navigate to the layout page
    navigate('/layout');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        background: '#f1f2f6',
      }}
    >
      <div className="card shadow-lg p-4" style={{ width: '400px', borderRadius: '10px' }}>
        <div className="text-center mb-4">
          <h2 className="text-primary">QDx Diagnostics</h2>
          <p className="text-muted">Login to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
              style={{ borderRadius: '5px' }}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
              style={{ borderRadius: '5px' }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: '#007bff',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none text-primary">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
