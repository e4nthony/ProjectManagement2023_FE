import {
    React, useState, useEffect, useContext
} from 'react';
import './styles/navbar_styles.css';
import { AuthContext } from '../AuthContext';


export default function Navbar() {
    const { setAuthState, authState } = useContext(AuthContext);

    function logout() {
        localStorage.removeItem('accessToken');
        setAuthState(false);
    }

    return (
        <nav className='nav'>
            <a href='/' className='site-title'>
                SCRUM
            </a>
            <ul>
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
                {authState && (
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
