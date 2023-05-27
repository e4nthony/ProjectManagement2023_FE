/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useState } from 'react';
import {
    Link, Route, Routes, useNavigate
} from 'react-router-dom';
import './styles/personalArea.css';
import Login from './Login';

function EditInfo () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    return (
      <div className='main-container'>
        <h1>edit info adar !</h1>
        <p className='about-par'>
          Welcome to our project in Project Managment course 2023
        </p>
      </div>
    );
}
export default EditInfo;
