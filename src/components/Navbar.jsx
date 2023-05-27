/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import {
    React, useState, useEffect, useContext
} from 'react';
import styles from './styles/NavbarStyles.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import DropDownProfile from './pages/DropDownProfile';


export default function Navbar () {
    const [selectedOption, setSelectedOption] = useState('');
    const { setAuthState, authState } = useContext(AuthContext);
    const navigate = useNavigate();

    function logout () {
        localStorage.removeItem('accessToken');
        setAuthState(false);
        navigate('/');
    }

    return (
      <nav className={styles.nav}>
        <a href='/'>BidZone</a>
        <ul>
          {authState && (<a href='/CreatePost'>Create Post</a>)}
          {!authState && (
            <>
              <li>
                <a href='/login'>Login</a>
              </li>
              <li>
                <a href='/register'>Register</a>
              </li>
            </>
                )}
          <li>
            <a href='/about'>About</a>
          </li>
          {authState && (<DropDownProfile />)}
        </ul>
      </nav>
    );
}
