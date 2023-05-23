/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useState } from 'react';
import './styles/register_styles.css';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'

import register_model from '../../model/register_model';


function RegistrationPage() {
  const navigate = useNavigate();

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

  //event.target.value
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (password !== event.target.value) {
      setPasswordMatchError('The password not match');
      setMatchMessage('');
    } else {
      setMatchMessage('The password match');
      setPasswordMatchError('');
    }
    if (password.length < 6) {
      setErrorMessage('Password is too short, please enter password from 6 to 18 characters');
    } else if (password.length > 18) {
      setErrorMessage('Password is too long, please enter password from 6 to 18 characters');
    } else {
      setErrorMessage('')
    }
  };

  const handelEmail = (event) => {

    setEmail(event.target.value);
    if (event.target.value.includes('@') && event.target.value.includes('.')) {
      setErrorMessage('');
    } else {
      setErrorMessage('Please input a valid Email');
    }

  };

  const handelDateOfBirth = (event) => {
    setDateOfBirth(event.target.value)
    // Check if user is over 18 years old
    const dobDate = new Date(event.target.value);
    const nowDate = new Date();
    const diffInYears = (nowDate - dobDate) / (1000 * 60 * 60 * 24 * 365);
    if (diffInYears < 18) {
      setAgeError('You must be at least 18 years old to register');
    } else {
      setAgeError('');
    }

  };

  const handelPassowrd = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== confirmPassword) {
      setPasswordMatchError('The password not match');
      setMatchMessage('');
    } else {
      setMatchMessage('The password match');
      setPasswordMatchError('');
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '' || username === '' || firstName === '' || lastName === '' || dateOfBirth === '') {
      setErrorMessage('Please fill all fields');
    } else {
      setErrorMessage('');
    }

    // Create form data object
    // const formData = new FormData();
    // formData.append('firstName', firstName);
    // formData.append('lastName', lastName);
    // formData.append('userName', username);
    // formData.append('email', email);
    // formData.append('password', password);
    // formData.append('date', dateOfBirth);

    /* encrypt password (generate hash of password): */
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const data = {
      firstName: firstName,
      lastName: lastName,
      userName: username,
      email: email,
      enc_password: encryptedPassword,
      birth_date: dateOfBirth
    }

    /* Send data to server */
    let is_success;
    try {
      is_success = await register_model.register(data);
    } catch (err) {
      console.log('failed to register user: ' + err);
      setErrorMessage('Registration failed, please try again later');
      return;
    }

    if (!is_success) {
      setErrorMessage('Registration failed, please try again later');
      return;
    }

    return navigate('/login');
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
          onChange={handelEmail}
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
          onChange={handelPassowrd}
        />
      </label>
      <br />
      <label htmlFor='confirmPassword'>
        Confirm Password:
        <input
          type='password'
          id='confirmPassword'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
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
          onChange={handelDateOfBirth}
        />
      </label>
      <br />

      {ageError && <p style={{ color: 'black' }}>{ageError}</p>}
      {errorMessage && <p style={{ color: 'black' }}>{errorMessage}</p>}

      <button className='register-button' type='submit' onClick={handleSubmit}>Register</button>
    </form>
  );
}

export default RegistrationPage;
