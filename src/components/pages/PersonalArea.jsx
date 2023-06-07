
/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useState } from 'react';
import {
    Link, Route, Routes, useNavigate   
} from 'react-router-dom';
// import './styles/personalArea.css';
import Login from './Login';
import authService from '../../services/authService';
import { async } from 'q';
function PersonalArea() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // change to false when log in
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('2000-01-01');
    const [userName,setUserName] = useState('')
    async function getinfo()
    {
    const res = await authService.get_user_info_by_email(localStorage.getItem('activeUserEmail'))
    console.log(res);
        setUserName(res.data.user_info.userName);
        setDateOfBirth(res.data.user_info.birth_date);
        setFirstName(res.data.user_info.firstName);
        setLastName(res.data.user_info.lastName);

        
    }
    getinfo();
    console.log(userName);
    
    return (
        <div>
            <h1>Personal Area</h1>
            {isLoggedIn ? (
                <div>
                    {/* User Information */}
                    <div>
                        <strong>First Name: {firstName} </strong>
                        
                    </div>
                    <div>
                        <strong>Last Name:  {lastName} </strong>

                    </div>
                    <div>
                        <strong>Username: </strong>
                        {userName}
                    </div>
                    <div>
                        <strong>Email: </strong>
                        {localStorage.getItem('activeUserEmail')}
                    </div>
                    <div>
                        <strong>Password: </strong>
                          ********
                    </div>
                    {/* Following and Followers */}
                    <div className='following-followers'>
                        <div className='following-followers-item'>
                            <h3>Following</h3>
                            <span>{}</span>
                        </div>
                        <div className='following-followers-item'>
                            <h3>Followers</h3>
                            <span>{}</span>
                        </div>
                    </div>
                    <Link to='/personalarea/editinfo'>
                        <button type='button'>Edit Info</button>
                    </Link>

                    <Link to='/personalarea/confirmanddelet'>
                    <button type='button' >delete my account</button>
                    </Link>


                </div>
            ) : (
                <div>
          Please log in to view your information.
                    <Link to='/login'>
                        <button type='button'>Login</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default PersonalArea;
