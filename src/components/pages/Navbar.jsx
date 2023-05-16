import {
    React, useState, useEffect, useContext
} from 'react';
import './styles/navbar_styles.css';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../AuthContext';


export default function Navbar() {
    const { setAuthState, authState } = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('accessToken');
        localStorage.setItem('loggedIn', false);
        setAuthState(false);
        navigate('/');
    }

    function isLogged() {
        if (localStorage.getItem('loggedIn') === 'true') return true;
        return false;
    }

    return (
        <nav className='nav'>
            <a href='/' className='site-title'>
                SCRUM
            </a>
            <ul>
                {!isLogged() && (
                    <>
                        <li>
                            <a href='/login'>Login</a>
                        </li>
                        <li>
                            <a href='/register'>Register</a>
                        </li>
                    </>
                )}
                {isLogged() && (
                    <li>
                        <button type='button' className='my-button' onClick={logout}>Logout</button>
                    </li>
                )}
                <li>
                    <a href='/about'>About</a>
                </li>
            </ul>

        </nav>
    );
}
