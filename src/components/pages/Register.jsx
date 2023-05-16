import React, { useState } from 'react';
import './styles/style.css';
import { useNavigate } from 'react-router-dom';


import register_model from '../../model/register_model';


function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [matchMessage, setMatchMessage] = useState('');
       
    const handleSubmit = async (e) => {
     e.preventDefault();

     // Check if passwords match
        if (password !== confirmPassword) {
            setPasswordMatchError('The password not match');
            setMatchMessage('');
    } else {
        setMatchMessage('The password match');
        setPasswordMatchError('');

    }
  
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
    
    let is_success;
    try {
      is_success = await register_model.register(formData)
    } catch (err) {
      console.log('failed to log in user: ' + err);
    }

    if (!is_success) {
      errorMessage();
      return;
  }
      useNavigate('/home');

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

      {passwordMatchError && <p style={{ color: 'red' }}>{passwordMatchError}</p>}
      {matchMessage && <p style={{ color: 'green' }}>{matchMessage}</p>}
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

      {ageError  && <p>{ageError }</p>}
      {errorMessage && <p>{errorMessage }</p>}

      <button type='submit' onClick={handleSubmit}>Register</button>
    </form>
  );
}

export default RegistrationPage;
