import React, { useState } from 'react';
import './styles/Register_style.css';

function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [ageError, setAgeError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
     e.preventDefault();

     // Check if passwords match
        if (password !== confirmPassword) {
            setPasswordMatchError(true);
        return
    }

    // // Check if email is already in use
    // const emailResponse = await fetch(`/api/check-email?email=${email}`);
    // const emailAvailable = await emailResponse.json();
    // if (!emailAvailable) {
    //   setErrorMessage('Email is already in use');
    //   return;
    // }

    // // Check if username is already in use
    // const usernameResponse = await fetch(`/api/check-username?username=${username}`);
    // const usernameAvailable = await usernameResponse.json();
    // if (!usernameAvailable) {
    //   setErrorMessage('Username is already in use');
    //   return;
    // }

    // Check if user is over 18 years old
    const dobDate = new Date(dateOfBirth);
    const nowDate = new Date();
    const diffInYears = (nowDate - dobDate) / (1000 * 60 * 60 * 24 * 365);
    if (diffInYears < 18) {
      setAgeError('You must be at least 18 years old to register');
      return
    }

    // Create form data object
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('dateOfBirth', dateOfBirth);

    // Send form data to server
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Registration successful:', data);
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('An error occurred while registering. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>
        First Name:
        <input
          type='text'
          id='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor='lastName'>
        Last Name:
        <input
          type='text'
          id='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />

      <label htmlFor='email' className='label'>
        Email
        <input
          type='email'
          id='email'
          className='input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label htmlFor='username'>
        Username:
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor='confirmPassword'>
        Confirm Password:
        <input
          type='password'
          id='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      {passwordMatchError && <p>Passwords do not match.</p>}
      <br />
      <label htmlFor='dateOfBirth'>
        Date of Birth:
        <input
          type='date'
          id='dateOfBirth'
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>
      <br />

      {passwordMatchError && <p>{passwordMatchError}</p>}
      {ageError  && <p>{ageError }</p>}
      {errorMessage && <p>{errorMessage }</p>}

      <button type='submit'>Register</button>
    </form>
  );
}

export default RegistrationPage;