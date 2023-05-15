import React from 'react';
import './styles/navbar_styles.css';

export default function Navbar() {
    return (
        <nav className='nav'>
            <a href='/' className='site-title'>
                BidZone
            </a>
            <ul>
                <li className='active'>
                    <a href='/login'>Login</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/register'>Register</a>
                </li>
            </ul>
        </nav>
    );
}
