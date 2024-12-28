import React, { useState } from 'react';

const FirstPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div style={styles.container}>
      <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
      {isSignIn ? <SignInForm /> : <SignUpForm />}
      <button onClick={toggleForm} style={styles.toggleButton}>
        {isSignIn ? 'Switch to Sign Up' : 'Switch to Sign In'}
      </button>
    </div>
  );
};

const SignInForm = () => (
  <form style={styles.form}>
    <label>
      Email:
      <input type="email" name="email" style={styles.input} />
    </label>
    <label>
      Password:
      <input type="password" name="password" style={styles.input} />
    </label>
    <button type="submit" style={styles.submitButton}>Sign In</button>
  </form>
);

const SignUpForm = () => (
  <form style={styles.form}>
    <label>
      Name:
      <input type="text" name="name" style={styles.input} />
    </label>
    <label>
      Email:
      <input type="email" name="email" style={styles.input} />
    </label>
    <label>
      Password:
      <input type="password" name="password" style={styles.input} />
    </label>
    <button type="submit" style={styles.submitButton}>Sign Up</button>
  </form>
);

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
  },
  submitButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  toggleButton: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default FirstPage;
