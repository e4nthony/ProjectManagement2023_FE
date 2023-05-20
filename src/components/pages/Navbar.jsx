import {
    React, useState, useEffect, useContext
} from 'react';
import './styles/navbar_styles.css';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../AuthContext';
import DropDownProfile from './DropDownProfile';


export default function Navbar() {
    const [selectedOption, setSelectedOption] = useState('');
    const { setAuthState, authState } = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('accessToken');
        setAuthState(false);
        navigate('/');
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
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <DropDownProfile />
                </li>
            </ul>
        </nav>
    );
}
