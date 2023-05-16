import { React, useState, useEffect } from 'react';
import './styles/navbar_styles.css';
import { AuthContext } from '../AuthContext';

export default function Navbar() {
    const [authState, setAuthState] = useState(false);

    function logout() {
        localStorage.removeItem('accessToken');
        setAuthState(false);
    }

    return (
        <nav className='nav'>
            <AuthContext.Provider value={{ authState, setAuthState }}>
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
            </AuthContext.Provider>
        </nav>
    );
}
