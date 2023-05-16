import React, { useState } from 'react';
import {
    Link, Route, Routes, useNavigate   
} from 'react-router-dom';
import './styles/personalArea.css';
import Login from './Login';

function PersonalArea() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // change to false when log in
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });
  
  

    return (
        <div>
            <h1>Personal Area</h1>
            {isLoggedIn ? (
                <div>
                    {/* User Information */}
                    <div>
                        <strong>First Name: </strong>
                        {user.firstName}
                    </div>
                    <div>
                        <strong>Last Name: </strong>
                        {user.lastName}
                    </div>
                    <div>
                        <strong>Username: </strong>
                        {user.username}
                    </div>
                    <div>
                        <strong>Email: </strong>
                        {user.email}
                    </div>
                    <div>
                        <strong>Password: </strong>
                          ********
                    </div>
                    {/* Following and Followers */}
                    <div className='following-followers'>
                        <div className='following-followers-item'>
                            <h3>Following</h3>
                            <span>{user.followers}</span>
                        </div>
                        <div className='following-followers-item'>
                            <h3>Followers</h3>
                            <span>{user.followers}</span>
                        </div>
                    </div>
                    <Link to='/personalarea/editinfo'>
                        <button type='button'>Edit Info</button>
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
