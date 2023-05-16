import React, { useState } from 'react';
import {
 Link, Route, Routes, useNavigate   
} from 'react-router-dom';
import './styles/personalArea.css';
import Login from './Login';

function PersonalArea() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //change to false when log in
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const history = useNavigate();

  const handleEditInfo = () => {
    history.push('/edit-info');
  };

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
          <div className="following-followers">
            <div className="following-followers-item">
              <h3>Following</h3>
              <span>{user.followers}</span>
            </div>
            <div className="following-followers-item">
              <h3>Followers</h3>
              <span>{user.followers}</span>
            </div>
          </div>
          <button type='button' onClick={handleEditInfo}>Edit Info</button>
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
