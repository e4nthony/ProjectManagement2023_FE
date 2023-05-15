import React, { useState } from 'react';

function PersonalArea() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Simulating authentication logic
    if (user.username === 'johndoe' && user.password === 'password') {
      // Set the user's information upon successful login
      setUser({
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: '********',
      });
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      // Handle login error
      setLoginError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    // Clear the user's information and log out
    setUser({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Personal Area</h1>
      {isLoggedIn ? (
        <div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <span>{user.firstName}</span>
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <span>{user.lastName}</span>
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <span>{user.username}</span>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <span>{user.email}</span>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <span>********</span>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login to view your information.</p>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {loginError && <p>{loginError}</p>}
        </div>
      )}
    </div>
  );
}

export default PersonalArea;
