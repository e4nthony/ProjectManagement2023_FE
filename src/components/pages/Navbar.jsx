import React from 'react';
import './styles/navbar_styles.css';

function logout() {
    localStorage.removeItem('accessToken');
}

export default function Navbar() {
    return (
        <nav className='nav'>
            <a href='/' className='site-title'>
                SCRUM
            </a>
            <ul>
                {!localStorage.getItem('accessToken') && (
                    <>
                        <li>
                            <a href='/login'>Login</a>
                        </li>
                        <li>
                            <a href='/register'>Register</a>
                        </li>
                    </>
                )}

                {localStorage.getItem('accessToken') && (
                    <li>
                        <button type="button" className='my-button' onClick={logout}>Logout</button>
                    </li>
                )}
                <li>
                    <a href='/about'>About</a>
                </li>
            </ul>
        </nav>
    );
}
