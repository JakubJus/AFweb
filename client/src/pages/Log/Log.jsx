// Log.jsx

import React, { useState } from 'react';
import './Log.scss';

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic (e.g., check credentials against a database)
    if (username === 'exampleUser' && password === 'password123') {
      // Successful login, you can redirect or perform further actions
      console.log('Login successful!');
      setError('');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="log-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Log;
